'use client'
import React from "react";
import { motion } from "framer-motion";


export function PopupReveal({ className, children, duration = 1 }: {
    className?: string,
    duration?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{
                scale: 1,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: duration
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}



export function FromLeftReveal({ className, children, duration = 1 }: {
    className?: string,
    duration?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ x: -500 }}
            whileInView={{
                x: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: duration
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}


export function FromRightReveal({ className, children, duration = 1 }: {
    className?: string,
    duration?: number,
    children: React.ReactNode,
}) {
    return (
        <motion.div
            initial={{ x: 500 }}
            whileInView={{
                x: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: duration
                }
            }}
            viewport={{ once: false, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
