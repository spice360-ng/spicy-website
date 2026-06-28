export function randomIndex(length: number): number {
    if (length <= 1) return 0;
    return Math.floor(Math.random() * length);
}
