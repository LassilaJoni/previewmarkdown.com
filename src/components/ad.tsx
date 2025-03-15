import { useEffect, useRef } from "react";

const Ad = () => {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : 'd56f0c64f95aa0514ccf093c7b4854a4',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/d56f0c64f95aa0514ccf093c7b4854a4/invoke.js";

    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script1);
      adContainerRef.current.appendChild(script2);
    }
  }, []);

  return <div ref={adContainerRef} />;
};

export default Ad;
