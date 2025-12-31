"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
const links = [
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contato" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
                fixed top-0 left-0 w-full z-50
                backdrop-blur-xl bg-black/40
                border-b border-blue-500/10
                shadow-[0_0_25px_rgba(0,120,255,0.15)]
            "
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="
        flex items-center gap-2
        text-xl font-semibold tracking-wide
        text-white relative
        after:absolute after:-bottom-1 after:left-0
        after:w-full after:h-[2px]
        after:bg-blue-500 after:scale-x-0
        after:origin-left after:transition
        hover:after:scale-x-100
    "
                >
                    <Code2 className="text-blue-400" size={22} />

                    <span>
                        <span className="text-blue-400">Davi</span>{" "}
                        Sobrinho{" "}
                        <span className="text-blue-400">Labre</span>
                    </span>
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            whileHover={{ y: -2 }}
                            className="
                                relative text-white/80 font-medium
                                hover:text-blue-300 transition
                                after:absolute after:left-0 after:-bottom-1
                                after:w-full after:h-[2px]
                                after:bg-blue-400 after:scale-x-0
                                after:origin-left after:transition
                                hover:after:scale-x-100
                            "
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="
                        md:hidden px-6 pb-6
                        flex flex-col gap-4
                        bg-black/60 backdrop-blur-xl
                        border-t border-white/10
                    "
                >
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="
                                text-white/80 text-lg
                                hover:text-blue-300 transition
                            "
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
