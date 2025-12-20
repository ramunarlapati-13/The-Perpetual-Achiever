import React from "react";
import { motion } from "framer-motion";

export const bookChapters = [
    {
        id: "preface",
        title: "Preface / Introduction",
        part: "Front Matter",
        content: (
            <>
                <motion.section id="front-matter" className="text-center mb-16 pt-10">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-cyan-400 mb-2 leading-tight">The Perpetual Achiever</h1>
                    <h2 className="text-2xl font-light text-gray-600 dark:text-gray-400 mb-8">From Intentional Goal Setting to Lifelong Success Sustainability</h2>
                    <p className="text-xl font-semibold text-gray-800 dark:text-gray-300">By Ramu Narlapati</p>
                    <div className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700">
                        <p className="text-lg italic text-indigo-600 dark:text-cyan-300 max-w-xl mx-auto">
                            **Dedicated to all my dear Friends Including you**
                        </p>
                    </div>
                </motion.section>

                <motion.section id="preface" className="mb-16">
                    <h2 className="text-3xl font-bold text-indigo-700 dark:text-cyan-400 mb-4">Preface / Introduction: The Full-Cycle Vision</h2>
                    <p>Born from a deep curiosity and a passion for reading and writing, this book provides a complete, 10-step blueprint designed to guide you through the entire journey of high achievement. As a young BTech student, I recognize that true success isn't just about setting ambitious goals, but about having the mental and practical tools to navigate the inevitable challenges.</p>
                    <p>This guide will show you <strong>how to set effective goals</strong> and <strong>how to achieve them</strong>, while dedicating crucial chapters to anticipating <strong>the problems and hurdles</strong> you will face and <strong>how to overcome them in the most effective way</strong>.</p>
                </motion.section>
            </>
        ),
    },
    {
        id: "ch1",
        title: "Chapter 1: The Power of Purpose",
        part: "Part I: The Foundation",
        content: (
            <motion.section id="ch1" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 1: The Power of Purpose: Defining Your Success North Star</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: The North Star Principle</h2>
                <p>The journey to success, and more importantly, <em>Perpetual Achievement</em>, begins not with a plan, but with a <strong>North Star</strong>. If a ship leaves port knowing only that it wants to sail fast, it will inevitably get lost in the first storm. If, however, it knows its ultimate destination—its North Star—every course correction, every sail adjustment, and every difficult night at sea serves a clear, higher purpose.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">The Three Tiers of Aspiration</h2>
                <ol className="list-decimal ml-8 space-y-2 my-4">
                    <li><strong>Wishes:</strong> Passive desires without an internal commitment or a plan. <em>Example: "I wish I were rich."</em></li>
                    <li><strong>Dreams:</strong> Visionary aspirations that may lack concrete steps or timelines. <em>Example: "I dream of being a successful entrepreneur."</em></li>
                    <li><strong>Intentional Goals:</strong> Specific, measurable commitments rooted in <strong>personal value</strong> and backed by a system of action.</li>
                </ol>

                <div className="case-study p-5 mt-8 mb-8 rounded-lg bg-indigo-50 dark:bg-gray-800 border-l-4 border-indigo-500 dark:border-cyan-400">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-cyan-400 mb-3">Case Study: The Entrepreneur’s Purpose Shift</h3>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">A young software developer, <strong>Akash</strong>, initially set a goal to "build a company worth $1 million in three years." His motivation was purely financial.</p>
                    <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>The Challenge:</strong> After two years, he faced intense competition, burnout, and his motivation plummeted.</li>
                        <li><strong>The Result:</strong> The shift in purpose changed everything. He stopped chasing quick profits and started focusing on impact.</li>
                    </ul>
                </div>
            </motion.section>
        ),
    },
    {
        id: "ch2",
        title: "Chapter 2: Mapping the Territory",
        part: "Part I: The Foundation",
        content: (
            <motion.section id="ch2" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 2: Mapping the Territory</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: The Perpetual Achiever’s Methodology</h2>
                <p>Chapter 1 defined your <strong>North Star</strong> (Purpose). Now we must build the ship capable of reaching it. The difference between an Achiever and a <strong>Perpetual Achiever</strong> is in their methodology.</p>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Level 1: The Grand Goal</h2>
                <p>The biggest goals fail not due to lack of effort, but due to lack of clarity on the first step. When a BTech student faces a major thesis, they don't start coding the entire solution; they first create a <strong>Work Breakdown Structure (WBS)</strong>.</p>
            </motion.section>
        ),
    },
    {
        id: "ch3",
        title: "Chapter 3: Efficiency & Focus",
        part: "Part I: The Foundation",
        content: (
            <motion.section id="ch3" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 3: The Engine of Efficiency: Mastering Time Management and Focus</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: From Map to Machinery</h2>
                <p>In Chapter 2, you designed the map (WBS) and identified the fuel (Input Goals). Now, we install the engine of efficiency. Many people believe time management is about fitting more into the day, but the <strong>Perpetual Achiever</strong> understands it's about intentionality—fitting the <em>right</em> things in and protecting them fiercely.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: The Myth of Busyness and the Power of Deep Work</h2>
                <p><strong>Busyness is not productivity.</strong> Busyness is the emotional comfort of always having something to do, usually involving low-value, urgent tasks. Productivity is the calculated completion of high-value tasks that directly move your grand goal forward. Perpetual Achievers strive for <strong>Deep Work</strong>—focused, uninterrupted concentration on a high-value task.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 2: Time Blocking: The Non-Negotiable Contract</h2>
                <p>The traditional to-do list is a wish list; <strong>Time Blocking</strong> is a contract with yourself. Instead of listing tasks, you assign every hour of your day (from waking up to sleeping) to a specific activity, treating each block like a non-negotiable meeting.</p>
                <ol className="list-decimal ml-8 space-y-2 my-4">
                    <li><strong>Allocate Deep Work First:</strong> Identify the 2–4 hours where you are naturally most focused (your Peak Energy Zone) and block this time for your Level 4 Input Goals.</li>
                    <li><strong>Schedule Shallow Work:</strong> Batch low-value tasks (email, social media, chores) into specific, limited blocks.</li>
                    <li><strong>Schedule Rest and Review:</strong> Crucially, block time for breaks, exercise, family, and nightly review.</li>
                </ol>

                <div className="case-study p-5 mt-8 mb-8 rounded-lg bg-indigo-100 dark:bg-gray-800 border-l-4 border-indigo-600 dark:border-cyan-400">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-cyan-400 mb-3">Case Study: Time Blocking for the BTech Student</h3>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300">An engineering student, <strong>Siddharth</strong>, struggled with late-night cramming. He implemented Time Blocking based on his WBS (Chapter 2).</p>
                    <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>The Shift:</strong> He blocked 9:00 AM – 12:00 PM daily for "High-Value Coding Practice". He blocked 6:00 PM – 7:00 PM for "Email and Communication."</li>
                        <li><strong>Result:</strong> By moving high-value work to his morning Peak Energy Zone, he completed more in the first three hours than he previously did all day.</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 3: Prioritization: The Eisenhower Matrix</h2>
                <p>Not all tasks are created equal. The <strong>Eisenhower Matrix</strong> provides a simple, instantaneous filter for deciding where to allocate your Time Blocks. Every task can be categorized into one of four quadrants.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 4: Focused Execution: The Pomodoro Technique</h2>
                <p>Once you have a Time Block designated for a Level 4 task, how do you sustain the necessary focus? The <strong>Pomodoro Technique</strong> structures work into <strong>25 minutes of highly concentrated work followed by a 5-minute short break.</strong></p>
            </motion.section>
        ),
    },
    {
        id: "ch4",
        title: "Chapter 4: Consistency",
        part: "Part II: The Engine",
        content: (
            <motion.section id="ch4" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 4: The Compounding Effect: Building Unbreakable Consistency and Habits</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: Consistency is the Multiplier</h2>
                <p>Part I gave you the blueprint. Part II is about automation. Imagine having a massive investment that grows by just 1% every day; the returns are not linear, they are exponential. This is the <strong>Compounding Effect</strong> of consistency.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: Habit Stacking</h2>
                <p>Willpower is unreliable. <strong>Habit Stacking</strong> uses a proven principle of behavioral science: attach a new habit to an existing, established routine.</p>
                <p className="mt-2 text-indigo-700 dark:text-cyan-300 font-semibold">The Formula: "After I [Existing Routine], I will [New Habit]."</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-6">Section 2: The 1% Rule and the Zero Day</h2>
                <p>Perpetual Achievers understand that success is a marathon of minimal improvements. The <strong>1% Rule</strong> states that getting 1% better every day means you will be 37 times better by the end of the year.</p>

                <div className="case-study p-5 mt-8 mb-8 rounded-lg bg-indigo-100 dark:bg-gray-800 border-l-4 border-indigo-600 dark:border-cyan-400">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-cyan-400 mb-3">Case Study: Automating a Coding Habit</h3>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300"><strong>Deepak</strong> wanted to learn a new programming language but kept forgetting to practice.</p>
                    <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>The System:</strong> He implemented Habit Stacking: "When I sit down on the couch after dinner (Existing Routine), I will open my laptop and solve one LeetCode problem (New Habit)."</li>
                        <li><strong>Result:</strong> By making the barrier to entry tiny and attaching it to a reliable routine, he effortlessly built a daily coding habit.</li>
                    </ul>
                </div>
            </motion.section>
        ),
    },
    {
        id: "ch5",
        title: "Chapter 5: Emotional Control",
        part: "Part III: The Crucible",
        content: (
            <motion.section id="ch5" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 5: Emotional Control: Mastering Internal Turbulence</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: The Internal Battlefield</h2>
                <p>The Crucible is the testing ground. All high-stakes pursuits involve moments of crushing frustration, self-doubt, and anxiety. The <strong>Perpetual Achiever</strong> manages these with high <strong>Emotional Intelligence (EQ)</strong>.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: The A-B-C Model of Emotional Response</h2>
                <p>The <strong>A-B-C Model</strong> shows that your <em>belief</em> about an event causes the emotional consequence, not the event itself.</p>
                <ul className="list-disc ml-8 space-y-2 my-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <li><strong>A (Activating Event):</strong> Your BTech project fails a critical module test.</li>
                    <li><strong>B (Belief - Irrational):</strong> "I am a failure. I'm not smart enough."</li>
                    <li><strong>C (Consequence):</strong> Procrastination, anxiety.</li>
                </ul>
                <p>Replace the belief with a <strong>Rational Belief</strong>: "The code failed, but I did not. I will analyze the failure."</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 2: The 24-Hour Rule for Decisions</h2>
                <p>Never make a major decision or send an angry email at the peak of an emotional spike. The <strong>24-Hour Rule</strong> is non-negotiable: delay any irreversible decision for 24 hours to let the rational mind regain control.</p>
            </motion.section>
        ),
    },
    {
        id: "ch6",
        title: "Chapter 6: Anticipating Failure",
        part: "Part III: The Crucible",
        content: (
            <motion.section id="ch6" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 6: Anticipating Failure: The Pre-Mortem Strategy</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: Proactive Problem-Solving</h2>
                <p>Most people review a project <em>after</em> it fails (Post-Mortem). The <strong>Perpetual Achiever</strong> reviews it <em>before</em> it begins, assuming it has failed (Pre-Mortem). This inoculates your system against vulnerabilities.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: The Pre-Mortem Process</h2>
                <ol className="list-decimal ml-8 space-y-2 my-4">
                    <li><strong>Set the Scene:</strong> Announce that the goal has failed completely.</li>
                    <li><strong>Generate Failure Points:</strong> Brainstorm every plausible reason for failure.</li>
                    <li><strong>Develop Mitigation Strategies:</strong> Assign specific countermeasures to be implemented immediately.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 2: Creating a Risk Register</h2>
                <p>The output is the <strong>Risk Register</strong>, categorizing risks by Probability, Impact, and Mitigation Strategy. This turns potential crises into pre-planned execution steps.</p>
            </motion.section>
        ),
    },
    {
        id: "ch7",
        title: "Chapter 7: OODA Loop",
        part: "Part III: The Crucible",
        content: (
            <motion.section id="ch7" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 7: The OODA Loop: Rapid Problem-Solving</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: Agility Under Pressure</h2>
                <p>The <strong>OODA Loop</strong> (Observe, Orient, Decide, Act) allows you to cycle through decisions faster than your circumstances.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: The Four Stages</h2>
                <ol className="list-decimal ml-8 space-y-2 my-4">
                    <li><strong>Observe:</strong> Gather raw data/facts.</li>
                    <li><strong>Orient:</strong> Analyze data in context of goals and resources.</li>
                    <li><strong>Decide:</strong> Select a course of action.</li>
                    <li><strong>Act:</strong> Execute swiftly.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 2: The 80% Rule</h2>
                <p>Avoid Analysis Paralysis. Apply the <strong>80% Rule</strong>: Once you have 80% of the necessary information, <em>Decide</em> and <em>Act</em>. A swift, mostly correct decision is better than a perfect decision that arrives too late.</p>
            </motion.section>
        ),
    },
    {
        id: "ch8",
        title: "Chapter 8: The Pivot",
        part: "Part III: The Crucible",
        content: (
            <motion.section id="ch8" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 8: The Art of the Pivot</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: Persistence vs. Stubbornness</h2>
                <p>Persistence is admirable; <strong>Stubbornness</strong> is fatal. The <strong>Perpetual Achiever</strong> knows when to abandon a failing strategy (Pivot) without abandoning the purpose.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: Overcoming Sunk Cost Fallacy</h2>
                <p>The <strong>Sunk Cost Fallacy</strong> is the trap of factoring past investments into future decisions.</p>
                <p className="mt-2 text-indigo-700 dark:text-cyan-300 font-semibold">The Objective Test: "If I were starting today, knowing what I know now, would I still pursue this path?" If no, Pivot immediately.</p>

                <div className="case-study p-5 mt-8 mb-8 rounded-lg bg-indigo-100 dark:bg-gray-800 border-l-4 border-indigo-600 dark:border-cyan-400">
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-cyan-400 mb-3">Case Study: Pivoting the Business Model</h3>
                    <p className="text-sm italic text-gray-700 dark:text-gray-300"><strong>Vani</strong> realized her market was saturated after 9 months of work.</p>
                    <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>The Pivot:</strong> She used her Objective Test and pivoted her core technology from a B2C platform to a B2B SaaS tool.</li>
                        <li><strong>Result:</strong> She channeled her effort into a viable direction, turning her "wasted" time into valuable R&D.</li>
                    </ul>
                </div>
            </motion.section>
        ),
    },
    {
        id: "ch9",
        title: "Chapter 9: Review & Refine",
        part: "Part IV: The Sustenance",
        content: (
            <motion.section id="ch9" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 9: Review and Refine: The Perpetual Feedback Loop</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: The Loop of Sustenance</h2>
                <p>The <strong>Perpetual Feedback Loop</strong> ensures achievement is a continuous cycle. It's the mechanism for reliable self-accountability.</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: The Weekly Review Protocol</h2>
                <p>Every week, dedicate 60 minutes to:</p>
                <ol className="list-decimal ml-8 space-y-2 my-4">
                    <li><strong>Score Input Goals:</strong> Did you execute &gt;80%?</li>
                    <li><strong>Identify Bottlenecks:</strong> What stopped you?</li>
                    <li><strong>Clear the Decks:</strong> Inbox zero, workspace cleanup.</li>
                    <li><strong>Preview the North Star:</strong> Re-align upcoming tasks.</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 2: The Quarterly Deep Dive</h2>
                <p>Every 90 days, perform a strategic review separating <strong>Metric</strong> (data) from <strong>Story</strong> (narrative) to ensure long-term alignment.</p>
            </motion.section>
        ),
    },
    {
        id: "ch10",
        title: "Chapter 10: Legacy",
        part: "Part IV: The Sustenance",
        content: (
            <motion.section id="ch10" className="mb-16">
                <h1 className="text-4xl font-extrabold text-indigo-900 dark:text-cyan-400 mb-10">Chapter 10: Legacy and Longevity</h1>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Introduction: Beyond the Finish Line</h2>
                <p>The final challenge is preventing success from becoming complacency. The true measure of success is <strong>Contribution</strong> and <strong>Longevity</strong>.</p>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 1: From Acquisition to Contribution</h2>
                <p>Once foundational needs are met, focus must shift to Contribution. <strong>Legacy is built through service and mentorship.</strong> By teaching others, you solidify your own mastery and extend your impact.</p>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Section 2: Detachment from Outcome</h2>
                <p className="italic text-gray-600 dark:text-gray-400 my-4">"One must always strive to do good for others, or if that is not possible, to stay idle, but never commit injustice." — Suresh Bandela</p>
                <p><strong>Detachment from Outcome</strong> means treating success or failure as external events. Your value lies in the integrity of your effort and your commitment to doing good. This keeps you Centered and Grounded.</p>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-8">Final Conclusion: The Perpetual Achiever</h2>
                <p>The journey is cyclical. You possess the **Foundation**, the **Engine**, the **Crucible**, and the **Sustenance**. Embrace the loop, commit to the process, and trust the compounding effect. Your greatest achievement is the person you become in the process.</p>
            </motion.section>
        ),
    },
];
