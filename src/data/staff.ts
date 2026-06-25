/**
 * Spice 360 staff roster — names + spice names from the photo filenames, roles from
 * the IDs Figma (design/spice360-ids.fig). Order: directors, finance/admin, group
 * heads, deputy group heads, HR, then seniors/other roles, then interns (UI/UX before
 * digital), with the office assistants and the driver last.
 *
 * `corporate` is the primary photo on the People team grid; `tshirt` shows on hover.
 * Three people have only one photo — Ledeebari and Olayemi are corporate-only;
 * Emmanuel Dike / Joshua / the driver are t-shirt-only — so for them both fields point
 * at the same image and the hover swap is a no-op. Spice names are verbatim (Nigerian
 * spices kept as-is); blank = none chosen.
 */

export type StaffGroup =
    | "director"
    | "groupHead"
    | "staff"
    | "assistant"
    | "driver";

export type Staff = {
    fullName: string;
    /** Spice name, verbatim. Empty string = none chosen. */
    spice: string;
    role: string;
    group: StaffGroup;
    /** Short description — directors and the driver only. */
    description?: string;
    /** Primary photo (corporate). */
    corporate: string;
    /** Hover photo (t-shirt). Equals `corporate` when no counterpart exists. */
    tshirt: string;
};

const C = "/staff/corporate";
const T = "/staff/tshirt";

export const STAFF: Staff[] = [
    // --- Directors ------------------------------------------------------------
    {
        fullName: "Biodun Adefila",
        spice: "Salt",
        role: "Managing Director",
        group: "director",
        description:
            "Without salt, no dish is complete — no matter what else goes in.",
        corporate: `${C}/Biodun-Adefila-Salt.jpg`,
        tshirt: `${T}/Biodun-Adefila-Salt.jpg`,
    },
    {
        fullName: "Rotimi Ade-Onojobi",
        spice: "Alligator pepper",
        role: "Creative Director",
        group: "director",
        description:
            "Controls the temperature of every room — precise heat, never a degree too much.",
        corporate: `${C}/Rotimi-AdeOnojobi-Alligator-pepper.jpg`,
        tshirt: `${T}/Rotimi-AdeOnojobi-Alligator-pepper.jpg`,
    },
    { fullName: "Godwin Ndubuisi", spice: "Yaji", role: "Deputy Creative Director", group: "director", corporate: `${C}/Godwin-Ndubuisi-Yaji.jpg`, tshirt: `${T}/Godwin-Ndubuisi-Yaji.jpg` },

    // --- Finance & Admin ------------------------------------------------------
    { fullName: "Bimpe Gbadamosi", spice: "Turmeric", role: "Finance and Admin Manager", group: "staff", corporate: `${C}/Bimpe-Gbadamosi-Turmeric.jpg`, tshirt: `${T}/Bimpe-Gbadamosi-Turmeric.jpg` },

    // --- Group Heads ----------------------------------------------------------
    { fullName: "Tawakaltu Ojukotola", spice: "Green Bell pepper", role: "Copy Group Head", group: "groupHead", corporate: `${C}/Tawakaltu-Ojukotola-Green-Bell-pepper.jpg`, tshirt: `${T}/Tawakaltu-Ojukotola-Green-Bell-pepper.jpg` },
    { fullName: "Rotimi Turton", spice: "Cameroon pepper", role: "Group Head, Activation", group: "groupHead", corporate: `${C}/Rotimi-Turton-Cameroon-pepper.jpg`, tshirt: `${T}/Rotimi-Turton-Cameroon-pepper.jpg` },
    { fullName: "Elijah Omosanya", spice: "Nutmeg", role: "Senior Group Head, Art", group: "groupHead", corporate: `${C}/Elijah-Omosanya-Nutmeg.jpg`, tshirt: `${T}/Elijah-Omosanya-Nutmeg.jpg` },
    { fullName: "Tioluwalogo Olakunbi-Black", spice: "Black pepper", role: "Group Head, Brand & Clients Management", group: "groupHead", corporate: `${C}/Tioluwalogo-OlakunbiBlack-Black-pepper.jpg`, tshirt: `${T}/Tioluwalogo-OlakunbiBlack-Black-pepper.jpg` },
    { fullName: "Salami Akeem", spice: "Bayleaf", role: "Group Head", group: "groupHead", corporate: `${C}/Salami-Akeem-Bayleaf.jpg`, tshirt: `${T}/Salami-Akeem-Bayleaf.jpg` },
    { fullName: "Bola Giwa", spice: "Cumin", role: "Group Head", group: "groupHead", corporate: `${C}/Bola-Giwa-Cumin.jpg`, tshirt: `${T}/Bola-Giwa-Cumin.jpg` },

    // --- Deputy Group Heads ---------------------------------------------------
    { fullName: "Emmanuel Olotu", spice: "Thyme", role: "Deputy Group Head, Art", group: "groupHead", corporate: `${C}/Emmanuel-Olotu-Thyme.jpg`, tshirt: `${T}/Emmanuel-Olotu-Thyme.jpg` },
    { fullName: "Oladele Gbolahan", spice: "", role: "Deputy Group Head, Art", group: "groupHead", corporate: `${C}/Oladele-Gbolahan-spicename.jpg`, tshirt: `${T}/Oladele-Gbolahan-spicename.jpg` },

    // --- HR -------------------------------------------------------------------
    { fullName: "Onome Ihezue", spice: "Tomato", role: "Human Resource Manager", group: "staff", corporate: `${C}/Onome-Ihezue-Tomato.jpg`, tshirt: `${T}/Onome-Ihezue-Tomato.jpg` },

    // --- Seniors / other roles ------------------------------------------------
    { fullName: "Oluwamayowa Adebowale", spice: "Chili pepper", role: "Senior Digital Strategist", group: "staff", corporate: `${C}/Oluwamayowa-Adebowale-Chili-pepper.jpg`, tshirt: `${T}/Oluwamayowa-Adebowale-Chili-pepper.jpg` },
    // Ledeebari: corporate only — both point at the corporate image.
    { fullName: "Ledeebari Okoye", spice: "Scent leaf", role: "Senior Copywriter", group: "staff", corporate: `${C}/Ledeebari-Okoye-Scent-leaf.png`, tshirt: `${C}/Ledeebari-Okoye-Scent-leaf.png` },
    { fullName: "Oluremi Ogunwale", spice: "Crayfish", role: "Senior Copywriter", group: "staff", corporate: `${C}/Oluremi-Ogunwale-Crayfish.jpg`, tshirt: `${T}/Oluremi-Ogunwale-Crayfish.jpg` },
    { fullName: "Gloria Anavheokhai", spice: "Cinnamon", role: "Senior Executive, Traffic", group: "staff", corporate: `${C}/Gloria-Anavheokhai-Cinnamon.jpg`, tshirt: `${T}/Gloria-Anavheokhai-Cinnamon.jpg` },
    { fullName: "Elizabeth Crisp", spice: "Garlic", role: "Brand Strategy Manager", group: "staff", corporate: `${C}/Elizabeth-Crisp-Garlic.jpg`, tshirt: `${T}/Elizabeth-Crisp-Garlic.jpg` },
    { fullName: "Adaobi Onyenze-Ugochukwu", spice: "Saffron", role: "Account Manager", group: "staff", corporate: `${C}/Adaobi-OnyenzeUgochukwu-Saffron.jpg`, tshirt: `${T}/Adaobi-OnyenzeUgochukwu-Saffron.jpg` },
    { fullName: "Oyinloluwa Aderibigbe-Orisakwe", spice: "Basil", role: "Account Manager", group: "staff", corporate: `${C}/Oyinloluwa-AderibigbeOrisakwe-Basil.jpg`, tshirt: `${T}/Oyinloluwa-AderibigbeOrisakwe-Basil.jpg` },
    { fullName: "Magdalene Ajayi", spice: "Maggi", role: "Account Executive", group: "staff", corporate: `${C}/Magdalene-Ajayi-Maggi.jpg`, tshirt: `${T}/Magdalene-Ajayi-Maggi.jpg` },
    // Olayemi: corporate only — both point at the corporate image.
    { fullName: "Olayemi Alegbejo", spice: "Ginger", role: "Art Director", group: "staff", corporate: `${C}/Olayemi-Alegbejo-Ginger.png`, tshirt: `${C}/Olayemi-Alegbejo-Ginger.png` },
    { fullName: "Abdubaasit Raji", spice: "Oregano", role: "Art Director", group: "staff", corporate: `${C}/Abdubaasit-Raji-Oregano.jpg`, tshirt: `${T}/Abdubaasit-Raji-Oregano.jpg` },
    { fullName: "Daniel Suleman", spice: "Red pepper", role: "Art Director", group: "staff", corporate: `${C}/Daniel-Suleman-Red-pepper.jpg`, tshirt: `${T}/Daniel-Suleman-Red-pepper.jpg` },
    { fullName: "Johaan Martins", spice: "Curry", role: "Art Director", group: "staff", corporate: `${C}/Johaan-Martins-Curry.jpg`, tshirt: `${T}/Johaan-Martins-Curry.jpg` },
    { fullName: "David Nmeka", spice: "Shombo", role: "Junior Art Director", group: "staff", corporate: `${C}/David-Nmeka-Shombo.jpg`, tshirt: `${T}/David-Nmeka-Shombo.jpg` },
    { fullName: "Isaac Eze", spice: "White pepper", role: "Video Producer", group: "staff", corporate: `${C}/Isaac-Eze-White-pepper.jpg`, tshirt: `${T}/Isaac-Eze-White-pepper.jpg` },
    { fullName: "Oritseweyinmi Omagbemi", spice: "Star Anise seed", role: "Digital Community manager", group: "staff", corporate: `${C}/Oritseweyinmi-Omagbemi-Star-Anise-seed.jpg`, tshirt: `${T}/Oritseweyinmi-Omagbemi-Star-Anise-seed.jpg` },

    // --- Interns (UI/UX before Digital) ---------------------------------------
    { fullName: "Opeyemi Muyiwa-Dada", spice: "Ataare", role: "UI/UX Intern", group: "staff", corporate: `${C}/Opeyemi-MuyiwaDada-Ataare.jpg`, tshirt: `${T}/Opeyemi-MuyiwaDada-Ataare.jpg` },
    { fullName: "Jennifer Ezem", spice: "", role: "Digital Intern", group: "staff", corporate: `${C}/Jennifer-Ezem-spicename.jpg`, tshirt: `${T}/Jennifer-Ezem-spicename.jpg` },
    { fullName: "Tumininu Umeike", spice: "Onion", role: "Digital Intern", group: "staff", corporate: `${C}/Tumininu-Umeike-Onion.jpg`, tshirt: `${T}/Tumininu-Umeike-Onion.jpg` },
    { fullName: "Abosede Ekwonye", spice: "", role: "Digital Intern", group: "staff", corporate: `${C}/Abosede-Ekwonye-spicename.jpg`, tshirt: `${T}/Abosede-Ekwonye-spicename.jpg` },

    // --- Office assistants + driver (last) ------------------------------------
    { fullName: "Emmanuel Dike", spice: "Utazi", role: "Office Assistant", group: "assistant", corporate: `${T}/Emmanuel-Dike-Utazi.jpg`, tshirt: `${T}/Emmanuel-Dike-Utazi.jpg` },
    { fullName: "Joshua Okeowo", spice: "Rodo", role: "Office Assistant", group: "assistant", corporate: `${T}/Joshua-Okeowo-Rodo.jpg`, tshirt: `${T}/Joshua-Okeowo-Rodo.jpg` },
    {
        fullName: "Joseph Mida-Makeri",
        spice: "",
        role: "Driver",
        group: "driver",
        description: "He gets us from place to place when we need it the most.",
        corporate: `${T}/Joseph-MidaMakeri.jpg`,
        tshirt: `${T}/Joseph-MidaMakeri.jpg`,
    },
];
