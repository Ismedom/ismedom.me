"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";


export const PinContainer = ({
    children,
    title,
    href,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
}) => {
    const [transform, setTransform] = useState(
        "translate(-50%,-50%) rotateX(0deg)"
    );

    const onMouseEnter = () => {
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    };
    const onMouseLeave = () => {
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    };

    return (
        <div

            className={cn(
                "group/pin cursor-pointer",
                containerClassName
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            data-aos="fade-up"
        >
            <div
                style={{
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                }}
                className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"

            >

                <div className={cn("", className)} >{children}</div>

            </div>
            <PinPerspective title={title} href={href} />
        </div>
    );
};

export const PinPerspective = ({
    title,
    href,
}: {
    title?: string;
    href?: string;
}) => {
    return (
        <motion.div className="pointer-events-none  w-96 h-[100px] flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
            <div className=" w-full h-full  flex-none  inset-0">
                <div className="absolute top-0 inset-x-0  flex justify-center">
                    <a
                        href={href}
                        target={"_blank"}
                        className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
                    >
                        <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                            {title}
                        </span>

                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};
