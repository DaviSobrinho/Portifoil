"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Server,
    Smartphone,
    Cpu,
    Layers,
    Sparkles,
} from "lucide-react";

const services = [
    {
        title: "Aplicações Web Modernas",
        description:
            "Desenvolvimento de aplicações completas com foco em performance, SEO, UX e escalabilidade, usando arquitetura moderna e código limpo.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
        icon: Globe,
    },
    {
        title: "Back-end & APIs",
        description:
            "Criação de APIs seguras, bem estruturadas e fáceis de manter, com autenticação, regras de negócio e integração entre serviços.",
        tech: ["NestJS", "Prisma", "Next.js", "APIs REST"],
        icon: Server,
    },
    {
        title: "Automações, Bots e Integrações",
        description:
            "Automação de processos, integrações entre sistemas e criação de bots para reduzir tarefas manuais e aumentar eficiência.",
        tech: ["RPA", "APIs", "Webhooks", "Firebase"],
        icon: Cpu,
    },
    {
        title: "Aplicativos Mobile",
        description:
            "Desenvolvimento de apps Android com foco em arquitetura sólida, organização e experiência fluida para o usuário.",
        tech: ["Kotlin", "Jetpack Compose", "MVVM", "Android"],
        icon: Smartphone,
    },
    {
        title: "Arquitetura & Organização de Projetos",
        description:
            "Estruturação de projetos previsíveis, escaláveis e fáceis de evoluir, priorizando clareza, manutenção e boas práticas.",
        tech: ["Clean Code", "Arquitetura", "Patterns", "Boas práticas"],
        icon: Layers,
    },
    {
        title: "Integrações & Serviços em Nuvem",
        description:
            "Integração com serviços modernos para autenticação, banco de dados, storage e tarefas assíncronas.",
        tech: ["Firebase", "Clerk", "Inngest", "Cloud Functions"],
        icon: Sparkles,
    },
];

export default function Services() {
    return (
        <section id="services" className="relative w-full  lg:px-0 pt-28 pb-32">
            {/* Fundo neon decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.35]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                -45deg,
                rgba(0,140,255,0.02) 0px,
                rgba(0,140,255,0.1) 2px,
                transparent 2px,
                transparent 14px
            )`,
                    }}
                />
            </div>
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center text-5xl font-bold mb-6"
            >
                Meus <span className="text-blue-500">Serviços</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-white/70 max-w-3xl mx-auto mb-20 text-lg"
            >
                Atuo no desenvolvimento de soluções digitais completas, desde a ideia até a
                entrega em produção, com foco em qualidade, clareza arquitetural e experiência do usuário.
            </motion.p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10 mx-4">
                {services.map((service, i) => {
                    const Icon = service.icon;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="
                                group relative p-6 rounded-2xl
                                bg-white/5 backdrop-blur-xl
                                border border-white/10
                                hover:border-blue-400/40
                                hover:bg-white/10
                                transition
                            "
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-400/20">
                                    <Icon className="text-blue-400" size={26} />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {service.title}
                                </h3>
                            </div>

                            <p className="text-white/70 leading-relaxed mb-5">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="
                                            text-sm px-3 py-1 rounded-full
                                            bg-white/5 border border-white/10
                                            text-white/70
                                        "
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
