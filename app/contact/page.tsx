'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [calHeight, setCalHeight] = useState('600px');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();

    const updateCalHeight = () => {
      const viewportHeight = window.innerHeight;
      const newHeight = Math.max(400, viewportHeight - 300); // Minimum height of 400px
      setCalHeight(`${newHeight}px`);
    };

    updateCalHeight();
    window.addEventListener('resize', updateCalHeight);

    return () => window.removeEventListener('resize', updateCalHeight);
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-card p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Contact</h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">jide@visual.ng</p>
          <div className="w-full" style={{ height: calHeight }}>
            <Cal namespace="15min"
              calLink="jide-pinheiro-kx3rcr/15min"
              style={{width:"100%",height:"100%",overflow:"auto"}}
              config={{"layout":"month_view"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

