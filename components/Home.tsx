import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Compass,
    Clock,
    Target,
    Shield,
    AlertTriangle,
    RefreshCw,
    Signpost,
    BarChart2,
    Award
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { bookChapters } from "@/data/chapters";
import { MorphingCardStack } from "@/components/ui/morphing-card-stack";

// Helper to get icons for chapters (Duplicated for standalone Home usage)
const getChapterIcon = (id: string) => {
    switch (id) {
        case 'preface': return <BookOpen size={18} />;
        case 'ch1': return <Compass size={18} />;
        case 'ch2': return <Signpost size={18} />;
        case 'ch3': return <Clock size={18} />;
        case 'ch4': return <RefreshCw size={18} />;
        case 'ch5': return <Shield size={18} />;
        case 'ch6': return <AlertTriangle size={18} />;
        case 'ch7': return <Target size={18} />;
        case 'ch8': return <Signpost size={18} />;
        case 'ch9': return <BarChart2 size={18} />;
        case 'ch10': return <Award size={18} />;
        default: return <BookOpen size={18} />;
    }
};

import { SpotlightText } from "@/components/ui/spotlight-text";

// ... existing imports ...

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden pt-32 md:pt-40">
            <HeroGeometric
                title1={
                    <>
                        <SpotlightText>The Perpetual Achiever</SpotlightText>
                        <span className="block text-lg md:text-2xl text-white/50 mt-2 font-light tracking-wider text-center mx-auto">
                            Written By Ramu Narlapati
                        </span>
                    </>
                }
                title2="From Intentional Goals to Lifelong Success"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-[-50px] z-20 relative mb-20"
            >
                <Link to="/book">
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white/10 dark:bg-zinc-900 border border-white/20 dark:border-zinc-800 px-8 font-medium text-white shadow-2xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:w-auto">
                        <span className="mr-2 text-indigo-100 dark:text-cyan-100 font-semibold tracking-wide">Start Reading</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </button>
                </Link>
            </motion.div>

            {/* Chapter Preview Section */}
            <div className="w-full max-w-5xl px-6 pb-20 z-20 relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center text-white/90 mb-12">Explore the Book</h2>

                    <MorphingCardStack
                        cards={bookChapters.map(ch => ({
                            id: ch.id,
                            title: ch.title.split(":")[0],
                            description: ch.title.split(":").slice(1).join(":").trim() || ch.part,
                            icon: getChapterIcon(ch.id),
                            path: `/book/${ch.id}`
                        }))}
                        defaultLayout="grid"
                        onCardClick={(card) => navigate(`/book/${card.id}`)}
                        className="max-w-4xl mx-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
}
