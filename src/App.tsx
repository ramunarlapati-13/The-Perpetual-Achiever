import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/components/Home";
import { BookViewer } from "@/components/BookViewer";
import { GeometricBackground } from "@/components/ui/geometric-background";
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
    return (
        <Router>
            <div className="relative min-h-screen bg-[#030303] text-white">
                {/* Global Background persists across pages */}
                <GeometricBackground />

                <AnimatedRoutes />
            </div>
        </Router>
    );
}

export default App;
