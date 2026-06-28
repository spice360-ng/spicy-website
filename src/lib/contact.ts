

export const CONTACT_EMAIL = "tech.spice360@gmail.com";

export function gmailCompose(opts?: { subject?: string; body?: string }): string {
    const params = new URLSearchParams({ view: "cm", fs: "1", to: CONTACT_EMAIL });
    if (opts?.subject) params.set("su", opts.subject);
    if (opts?.body) params.set("body", opts.body);
    return `https://mail.google.com/mail/?${params.toString()}`;
}

export const contact = {

    general: gmailCompose({
        subject: "Hello Spice360",
        body: "Hello Spice360, I am ",
    }),

    work: gmailCompose({
        subject: "Hello Spice360",
        body: "Hello Spice360, here's what I do ",
    }),

    apply: gmailCompose({
        subject: "Application for Spice360",
        body: "Hello Spice360, I'd like to apply. Here's a bit about me and a link to my portfolio: ",
    }),

    brief: gmailCompose({
        subject: "Brief for Spice Digital",
        body: "Hello Spice Digital, here's what we're building: ",
    }),
} as const;

export type ContactKind = keyof typeof contact;

const ROUTES: Record<string, string> = {
    home: "/",
    about: "/about",
    people: "/people",
    awards: "/about",
    blog: "/",
    "spice-digital": "/spice-digital",
    careers: "/people",
    privacy: "/",
};

export function route(key: keyof typeof ROUTES): string {
    return ROUTES[key] ?? "/";
}
