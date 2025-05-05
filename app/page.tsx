import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { Fade } from "react-awesome-reveal";

import catpaw from '../public/catpaw.png'

export default function Home() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (

    <>

<header className="bg-orange-200 p-6 shadow-md">
              <div className="container mx-auto flex justify-center items-center">
                <h1 className="text-3xl font-bold text-orange-800">Largatinhos 🐾</h1>
                
              </div>
          </header>

  <section className="container mx-auto p-6 text-center">
    <Fade>
    <h2 className="text-4xl font-bold mb-4">Um novo lar para nossos amiguinhos felinos</h2>
    <p className="text-lg text-gray-600 max-w-xl mx-auto">
      Resgatamos gatos das ruas e damos a eles amor, cuidados e uma nova chance de vida. Adote um Largatinho e transforme duas vidas!
    </p>
    </Fade>
  </section>


  <section id="gatos" className="container mx-auto p-6">
    <Fade>
      <h3 className="text-3xl font-semibold text-center mb-6">Nossos moradores</h3>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
    </Fade> 
  </section>


  <section id="sobre" className="bg-orange-100 p-6 mt-10">
    <Fade>
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Quem somos</h3>
        <p className="max-w-2xl mx-auto text-gray-700">
          Somos uma organização sem fins lucrativos dedicada a resgatar gatos abandonados, cuidar da saúde deles e encontrar famílias amorosas. Com a ajuda de voluntários e doações, damos uma nova chance a cada gatinho.
        </p>
      </div>
    </Fade>
  </section>

  <section id="Adote!" className="container mx-auto p-6 ">
    <Fade>

    
    <h3 className="text-3xl font-semibold text-center mb-6">Adote um gatinho!</h3>
    <form action="/adotar" method="post" className="p-6 border border-gray-400 rounded-[3rem] flex flex-col items-center text-center gap-2 shadow-md">
    
      <h5 className="font-bold mb-3">Preencha os dados abaixo para agendar uma visita</h5>

      <div key="Inputs" className="sm:grid sm:grid-cols-2 gap-4 flex flex-col">

        <div className="flex flex-col">
          <label htmlFor="nomeCompleto" className="text-base font-bolder">Nome Completo</label>
          <input name="nomeCompleto" id="nomeCompleto" type="text" className="border border-black rounded-full px-2 py-0.5 w-full" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefone" className="text-base font-bolder">Telefone</label>
          <input name="telefone" id="telefone" type="tel" className="border border-black rounded-full px-2 py-0.5 w-" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-base font-bolder">Email</label>
          <input name="email" id="email" type="email" className="border border-black rounded-full px-2 py-0.5 w-" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="cpf" className="text-base font-bolder">CPF</label>
          <input name="cpf" id="cpf" type="text" className="border border-black rounded-full px-2 py-0.5 w-" />
        </div>

      </div>

      <button type="submit" className="px-6 py-1 bg-amber-500 border border-amber-800 shadow-md rounded-full text-white font-bold">Enviar</button>
      

    </form>
    </Fade>
  </section>

  <section id="contato" className="container mx-auto p-6">
    <Fade>

    
    <h3 className="text-3xl font-semibold text-center mb-0">Quer saber mais?</h3>
    <h4 className="text-xl text-center mb-6">Entre em contato conosco</h4>
    <div className="max-w-xl mx-auto text-center space-y-2">
      <p>📧 Email: <a href="mailto:contato@largatinhos.org" className="text-orange-700 underline">contato@largatinhos.org</a></p>
      <p>📞 WhatsApp: <a href="https://wa.me/5591999999999" className="text-orange-700 underline" target="_blank">(91) 99999-9999</a></p>
      <p>📍 Localização: Sorocaba - SP</p>
    </div>
    </Fade>
  </section>
    </>
   
  );
}
