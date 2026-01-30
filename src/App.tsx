import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/components/Home";
import { BookViewer } from "@/components/BookViewer";
import { GeometricBackground } from "@/components/ui/geometric-background";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<BookViewer />} />
                <Route path="/book/:chapterId" element={<BookViewer />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    // Initialize theme on app load
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <Router>
            <div className="relative min-h-screen bg-white/50 dark:bg-[#030303] text-gray-900 dark:text-white transition-colors duration-500">
                {/* Global Background persists across pages */}
                <GeometricBackground />

                <AnimatedRoutes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
