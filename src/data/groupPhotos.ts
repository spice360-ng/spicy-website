/**
 * Group/candid photo lists from public/group, grouped by where they are used.
 * Filenames are verbatim from design/group-photos (some contain "+", which is a
 * literal character in a URL path and is handled fine by next/image).
 */

const G = "/group";

/** Home hero background slideshow. */
export const HERO_SLIDES = [
    `${G}/group-full.jpg`,
    `${G}/group-mgt.jpg`,
    `${G}/group-full+overhead.jpg`,
];

/** Home motto section background. */
export const MOTTO_BG = `${G}/motto-mixed.jpg`;

/** People landing background. */
export const PEOPLE_LANDING_BG = `${G}/group-full.jpg`;

/** Home "Behind the kitchen" — the Cannes/young-lions card. */
export const CANNES_IMG = `${G}/team-mixed-discourse.jpg`;

/**
 * The "fun" gallery set, reused as the People footer slideshow. First five are
 * fixed in this order; the rest are the secondary picks (order not significant).
 * `dir` drives the entrance: "up" tiles rise from the bottom, "down" tiles drop
 * from the top.
 */
export const FUN_PHOTOS: { src: string; dir: "up" | "down" }[] = [
    { src: `${G}/team-mixed-hifive+devices.jpg`, dir: "up" },
    { src: `${G}/team-hifive.jpg`, dir: "down" },
    { src: `${G}/goof-Gloria-Anavheokhai-Cinnamon.jpg`, dir: "up" },
    { src: `${G}/team-full-applause.jpg`, dir: "down" },
    { src: `${G}/team-mixed-casual.jpg`, dir: "up" },
    { src: `${G}/team-mixed-pose.jpg`, dir: "down" },
    { src: `${G}/goof-Adaobi-OnyenzeUgochukwu-Saffron.jpg`, dir: "up" },
    { src: `${G}/goof-Oluremi-Ogunwale-Crayfish.jpg`, dir: "down" },
    { src: `${G}/goof-Oladele-Gbolahan-spicename.jpg`, dir: "up" },
    { src: `${G}/group-full+overhead.jpg`, dir: "down" },
];

/** Just the image paths from FUN_PHOTOS (People footer slideshow). */
export const FUN_SLIDES = FUN_PHOTOS.map((p) => p.src);
