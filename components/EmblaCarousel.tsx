'use client'

import Link from 'next/link'
import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowFunctions'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla">
      <span className="w-full flex flex-row justify-end"><a href="/gatos" className="unset text-base text-amber-500 font-extrabold">Ver todos</a></span>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                
                <div className='flex flex-col gap-1 h-full items-center border border-black rounded-2xl p-4'>
                  <img src={"https://placecats.com/30"+ (index+1).toString() +"/200"} alt={"Gato " + (index +1).toString()} className='h-full object-contain'/>
                  <p className='text-xl font-bold'>Gatinho {index + 1}</p>
                  <p className='text-sm text-gray-700 line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam earum impedit recusandae rerum accusantium similique mollitia dicta animi aut sequi illum ab optio, dignissimos ullam praesentium quos, ratione eligendi? Facilis.</p>
                  <Link href='/gato/1' className='bg-amber-500 p-1 text-white rounded-full text-sm whitespace-nowrap'>Saiba mais</Link>
                </div>

                

              </div>
              
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
