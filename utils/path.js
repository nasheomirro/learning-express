import path from "path";

const moduleURL = new URL(import.meta.url);

// relative to the current file location
export const rootDir = path.join(path.dirname(moduleURL.pathname), "..");
