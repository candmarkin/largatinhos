import { checkEnvironment, getFotoDivbyID } from "../api/gatos/route";
import Image from "next/image";
import dynamic from "next/dynamic";
import { DivGato } from "../components/divGato";

const DynamicComponent = dynamic(() =>
  import('../components/divGato').then((mod) => mod.DivGato)
)
 




export default async function GatosPage(){

  const result = await fetch(checkEnvironment().concat('/api/gatos'))
  const gatos = await result.json()

return (<div className="m-4 sm:m-6 flex flex-row flex-wrap max-w-screen gap-4 justify-between">{gatos.map(async (gatoID: any) => {
          
          return(
            <DynamicComponent gatoID={gatoID}/>
          )
        })}</div>
)

}

