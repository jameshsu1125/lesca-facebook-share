declare global {
    interface Window {
        fbAsyncInit: Function;
        FB: any;
    }
    interface HTMLElement {
        src: string;
    }
}
type Options = {
    id: string;
};
type ShareOptions = {
    method: string;
    href: string;
    redirect_uri?: string;
    hashtag?: string;
    quote?: string;
};
declare const Facebook: {
    install: (uid: string, options?: Options) => void;
    share: (shareOptions?: ShareOptions) => void;
};
export default Facebook;
