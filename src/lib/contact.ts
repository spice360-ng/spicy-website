/**
 * Contact + navigation link helpers.
 *
 * "Get in touch" / "Contact us" open a Gmail compose window addressed to the studio,
 * pre-filled with a context-specific opening line (the menu, the About footer, and the
 * People footer each start a different kind of message). Links to pages that don't
 * exist yet fall back to the home page instead of 404ing.
 */

export const CONTACT_EMAIL = "tech.spice360@gmail.com";

/** Build a Gmail compose URL (opens the web composer in a new tab). */
export function gmailCompose(opts?: { subject?: string; body?: string }): string {
    const params = new URLSearchParams({ view: "cm", fs: "1", to: CONTACT_EMAIL });
    if (opts?.subject) params.set("su", opts.subject);
    if (opts?.body) params.set("body", opts.body);
    return `https://mail.google.com/mail/?${params.toString()}`;
}

/** Context-specific compose presets. */
export const contact = {
    /** Nav / mobile menu — a general introduction. */
    general: gmailCompose({
        subject: "Hello Spice360",
        body: "Hello Spice360, I am ",
    }),
    /** About & Work — a prospective client describing their work. */
    work: gmailCompose({
        subject: "Hello Spice360",
        body: "Hello Spice360, here's what I do ",
    }),
    /** People — a job application. */
    apply: gmailCompose({
        subject: "Application — Spice360",
        body: "Hello Spice360, I'd like to apply. Here's a bit about me and a link to my portfolio: ",
    }),
} as const;

export type ContactKind = keyof typeof contact;

/**
 * Resolve an intended destination to a route that exists today. Pages that aren't built
 * yet (Blog, Spice Digital, Careers, Privacy, dedicated Awards) point somewhere sensible
 * rather than a 404.
 */
const ROUTES: Record<string, string> = {
    home: "/",
    about: "/about",
    people: "/people",
    awards: "/about", // Awards lives on the About & Work page for now
    blog: "/",
    "spice-digital": "/",
    privacy: "/",
};

export function route(key: keyof typeof ROUTES): string {
    return ROUTES[key] ?? "/";
}
