import Link from "next/link";
import {
    Facebook,
    Instagram,
    Linkedin,
    Send,
    Twitter,
    Youtube,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/50 backdrop-blur-lg border-t border-white/5">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
                        TradeMaster
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            ABCD Tech Park, 3rd Floor
                            <br />
                            Abch Road, Bangalore
                            <br />
                            Bangalore-560103
                        </p>
                        <Link
                            href="/contact"
                            className="text-sm text-primary hover:underline mb-4 inline-block"
                        >
                            Contact Us
                        </Link>
                        <div className="flex space-x-4 mt-4">
                            {[
                                <Facebook key="facebook" size={18} />,
                                <Twitter key="twitter" size={18} />,
                                <Youtube key="youtube" size={18} />,
                                <Instagram key="instagram" size={18} />,
                                <Linkedin key="linkedin" size={18} />,
                                <Send key="telegram" size={18} />,
                            ].map((icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                                >
                                    {icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Products</h3>
                        <ul className="space-y-2">
                            {[
                                "Stocks",
                                "Futures & Options",
                                "IPO",
                                "Mutual Funds",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">Company</h3>
                        <ul className="space-y-2">
                            {[
                                "About Us",
                                "Pricing",
                                "Blog",
                                "Career",
                                "Help and Support",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-lg">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "AMC Mutual Funds",
                                "Calculators",
                                "Glossary",
                                "TradeMaster Digest",
                                "Help and Support",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        © 2025 TradeMaster. All rights reserved, Built with ❤️
                        in India
                    </p>
                    <div className="flex space-x-6">
                        <Link
                            href="/terms"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
