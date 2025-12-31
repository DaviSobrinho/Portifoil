"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ParallaxHero() {
    const scrollToSobre = () => {
        const section = document.getElementById("sobre");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className="
                relative h-[90vh] w-full flex items-center justify-center
                overflow-hidden px-4 text-center
            "
        >
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                src="/hero-video.mp4"
            />

            {/* Glow blobs */}
            <motion.div
                className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[150px] rounded-full top-0"
                animate={{ y: [-20, 20, -20], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full bottom-0 right-0"
                animate={{ y: [20, -20, 20], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className="
                        relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden
                        shadow-[0_0_25px_rgba(0,140,255,0.6)] mb-8
                    "
                >
                    <Image
                        src="/me.jpg"
                        alt="Foto de Davi"
                        fill
                        className="object-cover"
                        priority
                    />

                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-500/40"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-4xl sm:text-6xl font-bold tracking-tight drop-shadow-[0_0_20px_rgba(0,150,255,0.25)]"
                >
                    Davi Sobrinho
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.9 }}
                    className="text-lg sm:text-2xl text-white/70 mt-4 max-w-2xl"
                >
                    Desenvolvedor Full-Stack & Mobile • Experiência • Performance • Design
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10"
                >
                    <a
                        href="#projetos"
                        className="
                            px-8 py-3 rounded-xl text-lg font-semibold
                            bg-blue-600/80 backdrop-blur-xl border border-blue-400/30
                            hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(0,150,255,0.6)]
                            transition
                        "
                    >
                        Conheça meu trabalho
                    </a>
                </motion.div>
            </div>

            {/* ARROW / SCROLL INDICATOR */}
            <motion.button
                onClick={scrollToSobre}
                aria-label="Rolar para a seção Sobre mim"
                className="
                    absolute bottom-6 sm:bottom-8
                    flex flex-col items-center justify-center
                    text-white/70 hover:text-white
                    transition
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        p-2 rounded-full
                        border border-white/20
                        backdrop-blur-sm
                        hover:border-white/40 
                        cursor-pointer
                    "
                >
                    <ChevronDown size={28} />
                </motion.div>

                <span className="text-md mt-4 opacity-90 select-none cursor-pointer">
                    Saiba mais
                </span>
            </motion.button>
        </section>
    );
}
