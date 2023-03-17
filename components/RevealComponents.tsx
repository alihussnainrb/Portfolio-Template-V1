'use client'
import React from "react";
import { motion } from "framer-motion";



type DefaultRevealProps = {
    className?: string,
    duration?: number,
    delay?: number,
    bounce?: number,
    children: React.ReactNode,
}


export function PopupReveal({ className, children, duration = 1, delay = 0, bounce = 0 }: {
    className?: string,
    duration?: number,
    delay?: number,
    bounce?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{
                scale: 1,
                transition: {
                    type: "spring",
                    bounce: bounce,
                    duration: duration,
                    delay: delay,
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}




export function FadeReveal({ className, children, duration = 1, delay = 0, bounce = 0 }: {
    className?: string,
    duration?: number,
    delay?: number,
    bounce?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring",
                    bounce: bounce,
                    duration: duration,
                    delay: delay,
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}



export function FromLeftReveal({ className, children, duration = 1, delay = 0, bounce = 0 }: {
    className?: string,
    duration?: number,
    delay?: number,
    bounce?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: bounce,
                    duration: duration,
                    delay: delay,
                },
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}



export function FromRightReveal({ className, children, duration = 1, delay = 0, bounce = 0 }: {
    className?: string,
    duration?: number,
    delay?: number,
    bounce?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: bounce,
                    duration: duration,
                    delay: delay,
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}




export function FromTopReveal({ className, children, duration = 1, delay = 0, bounce = 0 }: {
    className?: string,
    duration?: number,
    delay?: number,
    bounce?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: bounce,
                    duration: duration,
                    delay: delay,
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}



type BottomRevealPops = DefaultRevealProps & {
    y?: number | string
}


export function FromBottomReveal(
    {
        className, children,
        duration = 1, delay = 0, bounce = 0,
        y = "100%"
    }: BottomRevealPops
) {
    return (
        <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: bounce,
                    duration: duration,
                    delay: delay,
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
