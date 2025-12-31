"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Code2, Smartphone, Server, Brain } from "lucide-react";

export default function AboutMe() {
    return (
        <section id="sobre" className="relative w-full  lg:px-0">

            {/* Divisória */}
            <div className="w-full h-[2px] bg-blue-900/10 rounded-full" />
            <div className="w-full h-[8px] bg-blue-900/10 blur-[4px] rounded-full mb-20" />

            {/* Fundo neon */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.35]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(-45deg, rgba(0,140,255,0.02) 0px, rgba(0,140,255,0.1) 2px, transparent 2px, transparent 14px)`
                    }}
                />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center text-5xl font-bold mb-24 relative z-10"
            >
                Sobre <span className="text-blue-500">mim</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4"
            >
                <div
                    className="
        relative
        w-full
        max-w-sm
        sm:max-w-md
        lg:max-w-[420px]
        aspect-square
        lg:aspect-[3/4]
        rounded-2xl
        overflow-hidden
        shadow-[0_0_25px_rgba(0,140,255,0.35)]
        place-self-center
    "
                >
                    <Image
                        src="/me.jpg"
                        alt="Foto de Davi"
                        fill
                        priority
                        className="object-cover object-top"
                    />

                    <div className="absolute inset-0 rounded-2xl border border-blue-500/30" />
                </div>


                {/* Texto */}
                <div>
                    <h3 className="text-4xl font-bold mb-6 flex items-center gap-3">
                        <User className="text-blue-400" />
                        Davi Labre
                    </h3>

                    <p className="text-white/75 text-lg leading-relaxed mb-6">
                        Olá, sou o Davi — desenvolvedor full stack apaixonado por construir produtos bem pensados,
                        organizados e fáceis de evoluir. Gosto de entender o problema a fundo antes de escrever código,
                        para garantir que cada decisão faça sentido tanto tecnicamente quanto para quem vai usar.
                    </p>

                    <p className="text-white/70 text-lg leading-relaxed mb-10">
                        Tenho um perfil analítico e valorizo clareza, previsibilidade e simplicidade nas soluções.
                        Costumo trabalhar com responsabilidade sobre o todo: desde a ideia inicial até a entrega em
                        produção, sempre buscando equilíbrio entre qualidade, performance e experiência do usuário.
                        Ao longo da minha trajetória, tive contato com diferentes contextos — sistemas, produtos, automações,
                        bots e aplicações mobile — o que ampliou minha visão sobre arquitetura e tomada de decisão.
                    </p>



                    {/* Destaques */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Feature icon={Brain} text="Pensamento analítico e foco em boas decisões técnicas" />
                        <Feature icon={Code2} text="Código limpo, legível e fácil de manter" />
                        <Feature icon={Server} text="Visão de arquitetura e responsabilidade do início ao fim" />
                        <Feature icon={Smartphone} text="Atenção real à experiência do usuário" />
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

function Feature({ icon: Icon, text }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            <Icon className="text-blue-400" size={20} />
            <span className="text-white/80 text-sm">{text}</span>
        </motion.div>
    );
}
