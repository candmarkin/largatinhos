import { checkEnvironment } from "@/app/checkenv";
import dynamic from "next/dynamic"
import React from "react";

const DynamicComponent = dynamic(() =>
  import('../components/divGato').then((mod) => mod.DivGato)
)
 




export default async function GatosPage(){

  const result = await fetch(checkEnvironment().concat('/api/gatos'))
  const gatos = await result.json()

return (<div className="m-4 sm:m-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">{gatos.map(async (gatoid: {id: string}) => {

          return(
            <DynamicComponent key={"DIV" + gatoid.id} gatoID={gatoid}/>
          )
        })}</div>
)

}

