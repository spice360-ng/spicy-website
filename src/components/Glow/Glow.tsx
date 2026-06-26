import type { CSSProperties } from "react";
import styles from "./Glow.module.scss";

type GlowProps = {
    position?: "top" | "bottom";

    tone?:
        | "warm"
        | "cool"
        | "orange"
        | "amber"
        | "ember"
        | "blue-dawn"
        | "orange-ellipse"
        | "red-ellipse";

    strength?: number;

    scale?: number;
};

const ELLIPSE_TONES = ["orange-ellipse", "red-ellipse"];

export default function Glow({ position = "bottom", tone = "warm", strength, scale }: GlowProps) {
    const isEllipse = ELLIPSE_TONES.includes(tone);
    return (
        <div
            className={`${styles.glow} ${styles[position]} ${styles[tone]}`}
            aria-hidden
            style={scale != null ? ({ "--glow-scale": scale } as CSSProperties) : undefined}
        >
            {isEllipse && (
                <span
                    className={styles.ellipse}
                    style={strength != null ? { opacity: strength } : undefined}
                />
            )}
        </div>
    );
}
