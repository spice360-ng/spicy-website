import type { CSSProperties } from "react";
import styles from "./Glow.module.scss";

type GlowProps = {
    position?: "top" | "bottom";
    /**
     * warm/cool/orange — green-dominant home tones (radial gradients).
     * amber — About & Work (gold/red/pink). ember — People (orange/red).
     * orange-ellipse / red-ellipse — the real Figma treatment: a single oversized
     * #FE5E00 / #BC3431 ellipse (2324×1397) bleeding off one edge, softened with
     * filter: blur(80px) and clipped by the section's overflow: hidden.
     */
    tone?:
        | "warm"
        | "cool"
        | "orange"
        | "amber"
        | "ember"
        | "blue-dawn"
        | "orange-ellipse"
        | "red-ellipse";
    /** Opacity override for the ellipse variants (Figma is ~0.18, People §3 ~0.8). */
    strength?: number;
    /** Enlarge the whole bloom from its anchored edge (2 = twice as big, etc.). */
    scale?: number;
};

const ELLIPSE_TONES = ["orange-ellipse", "red-ellipse"];

/**
 * Reproduces the Figma section glow. The ellipse variants render an actual oversized
 * ellipse anchored to one edge and blurred (matching the Figma fills), while the older
 * radial-gradient tones stay for the home page. Parent section must clip with
 * overflow: hidden.
 */
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
