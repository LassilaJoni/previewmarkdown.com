import { useEffect, useRef } from "react";

declare global {
    interface Window {
        aclib?: {
            runBanner: (options: { zoneId: string }) => void;
        };
    }
}

export default function Ad() {
    const adContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadAdcashScript = () => {
            if (!document.querySelector('script[src="https://static.adcash.com/aclib.js"]')) {
                const script = document.createElement("script");
                script.src = "https://static.adcash.com/aclib.js";
                script.async = true;
                script.onload = () => {
                    if (window.aclib && adContainer.current) {
                        window.aclib.runBanner({ zoneId: "9700878" });
                    }
                };
                document.body.appendChild(script);
            } else if (window.aclib && adContainer.current) {
                window.aclib.runBanner({ zoneId: "9700878" });
            }
        };

        loadAdcashScript();
    }, []);

    return <div ref={adContainer}></div>;
}
