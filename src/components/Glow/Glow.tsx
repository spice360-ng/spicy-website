import styles from "./Glow.module.scss";

type GlowProps = {
    position?: "top" | "bottom";
    tone?: "warm" | "cool" | "orange";
};

/**
 * Reproduces the Figma section glow: a large, soft bloom anchored to one edge that
 * fades to pure black by ~50% into the section (Figma uses big ellipses blurred ~450).
 * Green-dominant so the section stays black, with a coloured rim at the very edge.
 */
export default function Glow({ position = "bottom", tone = "warm" }: GlowProps) {
    return (
        <div
            className={`${styles.glow} ${styles[position]} ${styles[tone]}`}
            aria-hidden
        />
    );
}
