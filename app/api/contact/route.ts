import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT = new Map();

export async function POST(req: Request) {
    const data = await req.formData();

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const message = data.get("message")?.toString();
    const honeypot = data.get("company");

    if (honeypot) return NextResponse.json({ ok: true });

    const ip = req.headers.get("x-forwarded-for") ?? "unknown";

    const now = Date.now();
    const last = RATE_LIMIT.get(ip) ?? 0;
    if (now - last < 60000) {
        return NextResponse.json({ error: "Espere um pouco antes de enviar novamente." }, { status: 429 });
    }
    RATE_LIMIT.set(ip, now);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_DESTINY,
        subject: `Contato do Portfólio - ${name}`,
        text: `Mensagem de ${name} (${email}): ${message}`,
    });

    return NextResponse.json({ ok: true });
}
