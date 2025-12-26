"use client";

import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { cn } from "@/utils/cn";


type MouseEnterContextType = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
];

const MouseEnterContext = createContext<MouseEnterContextType | null>(null);

export const useMouseEnter = (): MouseEnterContextType => {
    const context = useContext(MouseEnterContext);
    if (!context) {
        throw new Error("useMouseEnter must be used within CardContainer");
    }
    return context;
};

interface CardContainerProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: CardContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();

        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;

        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn(
                    "py-20 flex items-center justify-center",
                    containerClassName
                )}
                style={{ perspective: "1000px" }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={() => setIsMouseEntered(true)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "relative flex items-center justify-center transition-all duration-200 ease-linear",
                        className
                    )}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

interface CardBodyProps {
    children: React.ReactNode;
    className?: string;
}

export const CardBody = ({ children, className }: CardBodyProps) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

type PolymorphicRef<T extends React.ElementType> =
    React.ComponentPropsWithRef<T>["ref"];

export type CardItemProps<T extends React.ElementType = "div"> = {
    as?: T;
    children: React.ReactNode;
    className?: string;
    translateX?: number;
    translateY?: number;
    translateZ?: number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export const CardItem = <T extends React.ElementType = "div">({
    as,
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}: CardItemProps<T>) => {
    const Component = as || "div";
    const ref = useRef<HTMLElement | null>(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        if (!ref.current) return;

        ref.current.style.transform = isMouseEntered
            ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px)
         rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
            : `translateX(0px) translateY(0px) translateZ(0px)
         rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }, [
        isMouseEntered,
        translateX,
        translateY,
        translateZ,
        rotateX,
        rotateY,
        rotateZ,
    ]);

    return (
        <Component
            ref={ref as PolymorphicRef<T>}
            className={cn("w-fit transition duration-200 ease-linear", className)}
            {...rest}
        >
            {children}
        </Component>
    );
};
