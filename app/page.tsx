import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { Fade } from "react-awesome-reveal";

export default function Home() {

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (

    <>

<header className="bg-orange-200 p-6 shadow-md">
              <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-orange-800">Largatinhos 🐾</h1>
                <nav className="space-x-4">
                  <a href="#sobre" className="hover:underline">Sobre</a>
                  <a href="#gatos" className="hover:underline">Gatos</a>
                  <a href="#contato" className="hover:underline">Contato</a>
                </nav>
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
      <h3 className="text-3xl font-semibold text-center mb-6">Gatos para adoção</h3>
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


  <section id="contato" className="container mx-auto p-6">
    <Fade>

    
    <h3 className="text-3xl font-semibold text-center mb-6">Entre em contato</h3>
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
