declare global {
    interface Window {
        opera: string;
    }
}
export declare const userAgent: () => boolean;
export declare const device: () => "mobile" | "desktop";
export declare const root: () => string;
