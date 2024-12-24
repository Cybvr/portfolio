
'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-12 gap-8">
        <div className="bg-card p-12 rounded-3xl">
          <h2 className="text-2xl font-bold mb-2">Contact</h2>
          <p className="mb-8">jide@visual.ng</p>
          <div className="h-[600px] w-full">
            <Cal namespace="15min"
              calLink="jide-pinheiro-kx3rcr/15min"
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{"layout":"month_view"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
