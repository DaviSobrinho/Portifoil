"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Code2,
    Cpu,
    Database,
    Globe,
    Layers,
    Smartphone,
    Server,
    Sparkles,
    Flame,
} from "lucide-react";

const techConfig: Record<
    string,
    { icon: any; color: string }
> = {
    "Next.js": { icon: Globe, color: "text-white" },
    "TypeScript": { icon: Code2, color: "text-blue-400" },
    "JavaScript": { icon: Code2, color: "text-yellow-300" },
    "Python": { icon: Code2, color: "text-blue-300" },
    "React": { icon: Globe, color: "text-cyan-400" },
    "MongoDB": { icon: Database, color: "text-green-400" },
    "Craco": { icon: Layers, color: "text-orange-300" },
    "Prisma": { icon: Database, color: "text-teal-300" },
    "Clerk": { icon: Sparkles, color: "text-pink-300" },
    "Inngest": { icon: Layers, color: "text-purple-300" },
    "Vercel": { icon: Server, color: "text-white" },
    "TailwindCSS": { icon: Layers, color: "text-cyan-300" },
    "Firebase": { icon: Flame, color: "text-yellow-400" },
    "Kotlin": { icon: Smartphone, color: "text-purple-400" },
    "NestJS": { icon: Server, color: "text-red-400" },
    "Jetpack Compose": { icon: Layers, color: "text-purple-300" },
    "MVVM": { icon: Layers, color: "text-green-300" },
    "Firestore": { icon: Database, color: "text-orange-300" },
    "Cloud Functions": { icon: Server, color: "text-yellow-300" },
    "Firebase Auth": { icon: Sparkles, color: "text-blue-300" },
    "Cloud Storage": { icon: Database, color: "text-blue-400" },
    "Push Notifications": { icon: Flame, color: "text-red-300" },
};

export default function Projects() {
    const projects = [
        {
            title: "Sensai",
            subtitle: "Plataforma alimentada com IA para desenvolvimento e insights de carreira e mercado",
            tech: ["Next.js", "TypeScript", "Clerk", "Prisma", "Inngest", "Gemini AI API"],
            img: "/projects/sensai.png",
            link: "https://sensai-mu-six.vercel.app/"
        },
        {
            title: "Pássaro de Presságio",
            subtitle: "Site institucional da companhia de teatro com features customizadas e correções",
            tech: ["React", "TypeScript", "JavaScript", "Python", "MongoDB", "Craco"],
            img: "/projects/passaro.png",
            link: "https://passarodepressagio.com/"
        },
        {
            title: "N3 Company",
            subtitle: "Site empresarial desenvolvido em Next.js",
            tech: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
            img: "/projects/n3.png",
            link: "https://n3company.com.br/"
        },
        {
            title: "Ensinativa",
            subtitle: "Aplicativo para celular de suporte técnico com chat em tempo real",
            tech: [
                "Kotlin",
                "MVVM",
                "Firebase",
                "Firestore",
                "Firebase Auth",
            ],
            img: "/projects/ensinativa.png",
            link: "https://github.com/DaviSobrinho/Ensinativa"
        },
    ];

    return (
        <section id="projetos" className="relative w-full px-4 lg:px-0 pt-20">

            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.35]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,140,255,0.02) 0px, rgba(0,140,255,0.1) 2px, transparent 2px, transparent 14px)`
                    }}
                />
            </div>
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center text-5xl font-bold mb-24 relative z-10"
            >
                Projetos em <span className="text-blue-500">Destaque</span>
            </motion.h2>

            <div className="space-y-20 relative z-10">
                {projects.map((p, i) => (
                    <ProjectItem key={i} {...p} reversed={i % 2 === 1} />
                ))}
            </div>
        </section>
    );
}

function ProjectItem({ title, subtitle, tech, img, link, reversed }: any) {
    return (
        <motion.section
            initial={{ opacity: 0, x: reversed ? 140 : -140 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className={`
                relative w-full flex flex-col lg:flex-row items-center
                gap-6 sm:gap-10 lg:gap-16
                px-4 sm:px-8 lg:px-12
                ${reversed ? "lg:flex-row-reverse" : ""}
            `}
        >
            <div className="relative w-full lg:w-1/2 lg:h-[380px] h-[240px] rounded-xl overflow-hidden group">

                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-fit scale-[1.03] group-hover:scale-[1.06] transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent " />
            </div>

            <div className="w-full lg:w-1/2">
                <h3 className="text-4xl sm:text-5xl font-bold mb-3">{title}</h3>

                <p className="text-white/70 text-lg sm:text-xl mb-4">{subtitle}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                    {tech.map((item: string, idx: number) => {
                        const config = techConfig[item] || { icon: Cpu, color: "text-blue-300" };
                        const Icon = config.icon;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: idx * 0.08 }}
                                className="
                                    flex items-center gap-2 px-4 py-2 rounded-xl
                                    bg-white/5 backdrop-blur-xl border border-white/10
                                    hover:bg-white/10 hover:border-white/20 transition
                                "
                            >
                                <Icon size={18} className={`${config.color}`} />
                                <span className="text-white/80 text-sm">{item}</span>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06 }}
                    className="
                        inline-block px-8 py-4 rounded-2xl text-lg font-semibold
                        bg-blue-600/70 backdrop-blur-md border border-blue-400/30
                        hover:bg-blue-500/80 hover:shadow-[0_0_20px_rgba(0,150,255,0.7)]
                        transition-all
                    "
                >
                    Ver projeto →
                </motion.a>
            </div>
        </motion.section>
    );
}