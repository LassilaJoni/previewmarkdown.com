import { useEffect } from 'react'

export default function Ad() {
    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        aclib.runBanner({
          zoneId: '9700878',
        });
      `;
      document.getElementById('script-container')?.appendChild(script);
      return () => {
        document.getElementById('script-container')?.removeChild(script);
      };
    }, []);
  
    return (
      <div id="script-container">
      </div>
    );
  }