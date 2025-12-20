"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { Grid3X3, Layers, LayoutList } from "lucide-react"

export type LayoutMode = "stack" | "grid" | "list"

export interface CardData {
    id: string
    title: string
    description: string
    icon?: ReactNode
    color?: string
    // Additional props for navigation
    path?: string
}

export interface MorphingCardStackProps {
    cards?: CardData[]
    className?: string
    defaultLayout?: LayoutMode
    onCardClick?: (card: CardData) => void
    activeId?: string
}

const layoutIcons = {
    stack: Layers,
    grid: Grid3X3,
    list: LayoutList,
}

const SWIPE_THRESHOLD = 50

export function MorphingCardStack({
    cards = [],
    className,
    defaultLayout = "stack",
    onCardClick,
    activeId,
}: MorphingCardStackProps) {
    const [layout, setLayout] = useState<LayoutMode>(defaultLayout)
    const [expandedCard, setExpandedCard] = useState<string | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    if (!cards || cards.length === 0) {
        return null
    }

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const { offset, velocity } = info
        const swipe = Math.abs(offset.x) * velocity.x

        if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
            setActiveIndex((prev) => (prev + 1) % cards.length)
        } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
            setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
        }
        setIsDragging(false)
    }

    // Ensure activeId brings the card to front in stack mode if possible, 
    // though stack mode relies on activeIndex. We might want to sync them.
    // For now, we'll just trust the user interaction or sync activeIndex activeId changes.

    const getStackOrder = () => {
        const reordered = []
        for (let i = 0; i < cards.length; i++) {
            // Simple stack logic based on activeIndex
            const index = (activeIndex + i) % cards.length
            reordered.push({ ...cards[index], stackPosition: i })
        }
        return reordered.reverse()
    }

    const getLayoutStyles = (stackPosition: number) => {
        switch (layout) {
            case "stack":
                return {
                    top: stackPosition * 8,
                    left: stackPosition * 8,
                    zIndex: cards.length - stackPosition,
                    rotate: (stackPosition - 1) * 2,
                }
            case "grid":
                return {
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    rotate: 0,
                }
            case "list":
                return {
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    rotate: 0,
                }
        }
    }

    const containerStyles = {
        stack: "relative h-64 w-64",
        grid: "grid grid-cols-2 gap-3",
        list: "flex flex-col gap-3",
    }

    const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

    return (
        <div className={cn("space-y-4", className)}>
            {/* Layout Toggle */}
            <div className="flex items-center justify-center gap-1 rounded-lg bg-secondary/50 dark:bg-white/10 p-1 w-fit mx-auto backdrop-blur-sm">
                {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
                    const Icon = layoutIcons[mode]
                    return (
                        <button
                            key={mode}
                            onClick={() => setLayout(mode)}
                            className={cn(
                                "rounded-md p-2 transition-all",
                                layout === mode
                                    ? "bg-indigo-500 text-white shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10",
                            )}
                            aria-label={`Switch to ${mode} layout`}
                        >
                            <Icon className="h-4 w-4" />
                        </button>
                    )
                })}
            </div>

            {/* Cards Container */}
            <LayoutGroup>
                <motion.div layout className={cn(containerStyles[layout], "mx-auto transition-all duration-500")}>
                    <AnimatePresence mode="popLayout">
                        {displayCards.map((card) => {
                            const styles = getLayoutStyles(card.stackPosition)
                            const isExpanded = expandedCard === card.id
                            const isTopCard = layout === "stack" && card.stackPosition === 0
                            const isActive = activeId === card.id

                            return (
                                <motion.div
                                    key={card.id}
                                    layoutId={card.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: isExpanded ? 1.05 : 1,
                                        x: 0,
                                        ...styles,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8, x: -200 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                    }}
                                    drag={isTopCard ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.7}
                                    onDragStart={() => setIsDragging(true)}
                                    onDragEnd={handleDragEnd}
                                    whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                                    onClick={() => {
                                        if (isDragging) return
                                        setExpandedCard(isExpanded ? null : card.id)
                                        onCardClick?.(card)
                                    }}
                                    className={cn(
                                        "cursor-pointer rounded-xl border p-4 backdrop-blur-md transition-colors",
                                        // Theme styles
                                        "bg-white/80 dark:bg-zinc-900/80 border-gray-200 dark:border-white/10",
                                        "hover:border-indigo-500/50 dark:hover:border-cyan-400/50",
                                        layout === "stack" && "absolute w-56 h-48 shadow-xl",
                                        layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                                        layout === "grid" && "w-full aspect-square shadow-sm",
                                        layout === "list" && "w-full shadow-sm",
                                        (isExpanded || isActive) && "ring-2 ring-indigo-500 dark:ring-cyan-400",
                                    )}
                                    style={{
                                        backgroundColor: card.color || undefined,
                                    }}
                                >
                                    <div className="flex items-start gap-3">
                                        {card.icon && (
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-white/10 text-indigo-700 dark:text-cyan-300">
                                                {card.icon}
                                            </div>
                                        )}
                                        <div className="min-w-0 flex-1">
                                            <h3 className={cn("font-semibold truncate text-gray-900 dark:text-gray-100", isActive && "text-indigo-600 dark:text-cyan-400")}>{card.title}</h3>
                                            <p
                                                className={cn(
                                                    "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                                    layout === "stack" && "line-clamp-3",
                                                    layout === "grid" && "line-clamp-2",
                                                    layout === "list" && "line-clamp-1",
                                                )}
                                            >
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>

                                    {isTopCard && layout === "stack" && (
                                        <div className="absolute bottom-2 left-0 right-0 text-center">
                                            <span className="text-xs text-gray-400">Swipe to navigate</span>
                                        </div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>
            </LayoutGroup>

            {/* Indicators for stack mode */}
            {layout === "stack" && cards.length > 1 && (
                <div className="flex justify-center gap-1.5 pt-4">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "h-1.5 rounded-full transition-all",
                                index === activeIndex ? "w-4 bg-indigo-500 dark:bg-cyan-400" : "w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400",
                            )}
                            aria-label={`Go to card ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
