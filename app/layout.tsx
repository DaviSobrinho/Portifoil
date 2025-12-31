import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
    title: "Davi Sobrinho — Portfólio",
    description: "Portfólio pessoal de Davi Sobrinho Labre, Desenvolvedor Full-Stack",
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" className="dark">
            <body className={`${poppins.className} bg-gradient-to-b from-gray-950 to-black text-white overflow-x-hidden`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
