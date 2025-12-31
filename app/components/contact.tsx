"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.target);

        const res = await fetch("/api/contact", {
            method: "POST",
            body: form,
        });

        setLoading(false);

        if (res.ok) {
            alert("Mensagem enviada com sucesso!");
            e.target.reset();
        } else {
            alert("Erro ao enviar mensagem, tente novamente.");
        }
    }

    return (
        <section id="contato" className="relative w-full px-4 lg:px-0 py-32">

            {/* Fundo neon */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.35]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,140,255,0.02) 0px, rgba(0,140,255,0.1) 2px, transparent 2px, transparent 14px)`
                    }}
                />
            </div>

            {/* Título */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center text-5xl font-bold mb-24 relative z-10"
            >
                Entre em <span className="text-blue-500">Contato</span>
            </motion.h2>

            {/* Container */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch"
            >
                {/* Card informações */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-3xl font-semibold mb-6 text-white">Informações</h3>

                        <ContactItem icon={Mail} label="Email" value="mailto:davisobrinho82452@gmail.com" link displayValue="davisobrinho82452@gmail.com" />
                        <ContactItem icon={Phone} label="Telefone" value="https://wa.me/5561998272223" link displayValue="(+55) 61 99827-2223" />
                        <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/in/davi-sobrinho" link />
                        <ContactItem icon={Github} label="GitHub" value="github.com/DaviSobrinho" link />

                        <p className="text-white/60 text-sm mt-8 leading-relaxed">
                            Estou disponível para novas oportunidades e projetos freelance. Entre em contato e retornarei assim que possível.
                        </p>
                    </div>
                </div>

                {/* Card formulário */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-3xl font-semibold mb-6 text-white">Envie uma mensagem</h3>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <InputField placeholder="Seu nome" name="name" />
                            <InputField placeholder="Seu email" name="email" />

                            {/* Honeypot */}
                            <input type="text" name="company" className="hidden" />

                            <textarea
                                name="message"
                                placeholder="Sua mensagem"
                                required
                                className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-4 text-white/80 placeholder-white/40 focus:border-blue-500/50 outline-none backdrop-blur-md"
                            />

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                disabled={loading}
                                className="flex place-self-center items-center gap-3 bg-blue-600/70 px-6 py-3 rounded-2xl font-semibold text-lg border border-blue-400/30 hover:bg-blue-500/80 hover:shadow-[0_0_20px_rgba(0,150,255,0.6)] transition-all disabled:opacity-50"
                            >
                                <Send size={20} className="text-white" />
                                {loading ? "Enviando..." : "Enviar mensagem"}
                            </motion.button>
                        </form>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

function ContactItem({ icon: Icon, label, value, link, displayValue }: any) {
    const shown = displayValue ?? value;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col mb-4"
        >
            <div className="flex items-center gap-3">
                <Icon size={20} className="text-blue-400" />
                <span className="text-white/80 font-medium">{label}:</span>
            </div>
            {link ? (
                <a
                    href={value.startsWith("http") ? value : `https://${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm ml-8 mt-[2px]"
                >
                    {shown}
                </a>
            ) : (
                <span className="text-white/70 text-sm ml-8 mt-[2px]">{shown}</span>
            )}
        </motion.div>
    );
}

function InputField({ placeholder, name }: any) {
    return (
        <input
            name={name}
            required
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white/80 placeholder-white/40 focus:border-blue-500/50 outline-none backdrop-blur-md"
        />
    );
}
