"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sun, Moon, ArrowLeft, ArrowRight, BookOpen, Compass, Clock, Target, Shield, AlertTriangle, RefreshCw, Signpost, BarChart2, Award } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { bookChapters } from "@/data/chapters";
import { MorphingCardStack, CardData } from "@/components/ui/morphing-card-stack";

export function BookViewer() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mobileTocOpen, setMobileTocOpen] = useState(false);
    const { chapterId } = useParams();
    const navigate = useNavigate();

    // Default to 'preface' if no chapterId
    const currentChapterId = chapterId || "preface";
    const activeChapter = bookChapters.find(c => c.id === currentChapterId) || bookChapters[0];
    const currentIndex = bookChapters.findIndex(c => c.id === currentChapterId);

    const prevChapter = currentIndex > 0 ? bookChapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < bookChapters.length - 1 ? bookChapters[currentIndex + 1] : null;

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
        setMobileTocOpen(false); // Close mobile TOC on selection
    }, [currentChapterId]);

    // Initialize theme
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleOutcome = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
        if (newMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    };

    // Helper to get icons for chapters
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


    return (
        <div className={cn("min-h-screen transition-colors duration-500 bg-transparent text-gray-900 dark:text-gray-100")}>

            {/* Sticky Theme Toggle - Bottom Right */}
            <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
                <button
                    onClick={toggleOutcome}
                    className={cn(
                        "pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all transform hover:scale-110",
                        isDarkMode
                            ? "bg-gray-800 text-yellow-400 border border-gray-700 hover:bg-gray-700"
                            : "bg-white/80 backdrop-blur-lg text-indigo-600 border border-indigo-200 hover:bg-indigo-50"
                    )}
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>

            <div className="max-w-7xl mx-auto md:grid md:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 pb-8">

                {/* Sidebar TOC - Now links to Routes via Morphing Card Stack */}
                <aside className="hidden md:block md:col-span-4 lg:col-span-3 relative">
                    <div className="sticky top-8 glass-container p-4 rounded-xl max-h-[calc(100vh-4rem)] overflow-y-auto border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/20 backdrop-blur-md shadow-lg transition-colors duration-500">
                        <Link to="/" className="flex items-center gap-2 mb-4 text-sm font-bold text-indigo-500 dark:text-cyan-400 hover:underline px-2">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <h2 className="text-xl font-bold mb-4 px-2 text-indigo-900 dark:text-white transition-colors">Table of Contents</h2>

                        <MorphingCardStack
                            cards={bookChapters.map(ch => ({
                                id: ch.id,
                                title: ch.title.split(":")[0], // Short title for card
                                description: ch.part,
                                icon: getChapterIcon(ch.id),
                                path: `/book/${ch.id}`
                            }))}
                            activeId={currentChapterId}
                            defaultLayout="list"
                            onCardClick={(card) => navigate(`/book/${card.id}`)}
                            className="pb-4"
                        />
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="md:col-span-8 lg:col-span-9 glass-container p-6 sm:p-10 lg:p-12 rounded-xl chapter-body border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/20 backdrop-blur-md shadow-2xl transition-colors duration-500 flex flex-col min-h-[80vh]">

                    {/* Mobile TOC Toggle */}
                    <button
                        onClick={() => setMobileTocOpen(!mobileTocOpen)}
                        className="md:hidden w-full bg-indigo-50 dark:bg-white/10 backdrop-blur-md text-indigo-700 dark:text-white py-2 mb-6 rounded-lg font-semibold border border-indigo-200 dark:border-white/20 hover:bg-indigo-100 dark:hover:bg-white/20 transition"
                    >
                        {mobileTocOpen ? "Hide Table of Contents" : `Chapter: ${activeChapter?.title}`}
                    </button>

                    {mobileTocOpen && (
                        <div className="md:hidden mb-8 p-6 rounded-xl glass-container border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-black/40 backdrop-blur-lg">
                            <h2 className="text-xl font-bold mb-4 text-indigo-900 dark:text-white">Table of Contents</h2>
                            <nav className="space-y-2 text-sm">
                                <Link to="/" className="block text-indigo-500 mb-2 font-bold">← Home</Link>
                                {bookChapters.map((chapter) => (
                                    <Link
                                        key={chapter.id}
                                        to={`/book/${chapter.id}`}
                                        className={cn(
                                            "block py-2 border-b border-gray-100 dark:border-gray-700",
                                            currentChapterId === chapter.id ? "text-indigo-600 dark:text-cyan-300 font-bold" : "text-gray-700 dark:text-gray-300"
                                        )}
                                    >
                                        {chapter.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    )}

                    {/* Content Renderer */}
                    <div className="flex-grow">
                        {activeChapter ? activeChapter.content : <p>Chapter not found.</p>}
                    </div>

                    {/* Navigation Footer */}
                    <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 flex justify-between items-center text-sm">
                        {prevChapter ? (
                            <Link to={`/book/${prevChapter.id}`} className="group flex items-center text-gray-500 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                <div className="text-left">
                                    <span className="block text-xs uppercase text-gray-400">Previous</span>
                                    <span className="font-semibold">{prevChapter.title}</span>
                                </div>
                            </Link>
                        ) : <div></div>}

                        {nextChapter ? (
                            <Link to={`/book/${nextChapter.id}`} className="group flex items-center text-right text-gray-500 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                                <div className="text-right">
                                    <span className="block text-xs uppercase text-gray-400">Next</span>
                                    <span className="font-semibold">{nextChapter.title}</span>
                                </div>
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        ) : <div></div>}
                    </div>
                </main>
            </div>
        </div>
    );
}
