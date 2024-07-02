"use client";

import React from "react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading">
                Benim <span className="text-purple">Yaklaşımım</span>
            </h1>
            <div className="mx-auto my-20 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
                <Card
                    title="Planlama ve Strateji"
                    icon={<AceternityIcon order="1. Bölüm" />}
                    description="Web sitenizin hedeflerini, hedef kitlesini ve temel işlevlerini belirlemek için işbirliği yapacağız. Site yapısı, gezinme ve içerik gereksinimleri gibi konuları tartışacağız."
                >
                    <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
                </Card>
                <Card
                    title="Geliştirme ve İlerleme Güncellemesi"
                    icon={<AceternityIcon order="2. Bölüm " />}
                    description="Plan üzerinde anlaştıktan sonra lofi şarkı listemi işaretleyip kodlamaya başlıyorum. İlk eskizlerden geliştirilmiş kodlara kadar her adımda sizi güncel tutuyorum.
"
                >
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(400px_at_center,white,transparent)] dark:bg-black/90" />
                </Card>
                <Card
                    title="Geliştirme ve Lansman"
                    icon={<AceternityIcon order="3. Bölüm" />}
                    description="sihrin gerçekleştiği yer burası! Onaylanan tasarıma dayanarak her şeyi işlevsel koda dönüştüreceğim ve web sitenizi sıfırdan oluşturacağım.
"
                >
                    <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
                </Card>
            </div>
        </section>
    );
};

const Card = ({ title, icon, children, description }: { title: string; icon: React.ReactNode; children?: React.ReactNode; description: string }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            // change h-[30rem] to h-[35rem], add rounded-3xl
            className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            {/* change to h-10 w-10 , add opacity-30  */}
            <Icon className="absolute -left-3 -top-3 h-10 w-10 text-black opacity-30 dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 h-10 w-10 text-black opacity-30 dark:text-white" />
            <Icon className="absolute -right-3 -top-3 h-10 w-10 text-black opacity-30 dark:text-white" />
            <Icon className="absolute -bottom-3 -right-3 h-10 w-10 text-black opacity-30 dark:text-white" />

            <AnimatePresence>
                {hovered && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 h-full w-full">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 px-10">
                <div
                    // add this for making it center
                    // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    className="absolute left-[50%] top-[50%] mx-auto flex min-w-40 translate-x-[-50%] translate-y-[-50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0"
                >
                    {icon}
                </div>
                <h2
                    // change text-3xl, add text-center
                    className="relative z-10 mt-4 text-center text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
                >
                    {title}
                </h2>
                {/* add this one for the description */}
                <p
                    className="relative z-10 mt-4 text-center text-sm opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100"
                    style={{ color: "#E4ECFF" }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
        <div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl text-sm font-bold text-white backdrop-blur-3xl">
                    {order}
                </span>
            </button>
        </div>
    );
};

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

export default Approach;
