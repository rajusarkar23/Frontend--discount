import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function TopCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0"><img src="https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Fbanners%2Fbanner%202.webp?alt=media&token=2892f6e9-d88c-4208-9218-da0571566a60" alt=""/></div>
        <div className="flex-[0_0_100%] min-w-0"><img src="https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Fbanners%2Fbanner%203.webp?alt=media&token=0e666213-ece2-4474-9517-2308314e17c6" alt=""/></div>
        <div className="flex-[0_0_100%] min-w-0"><img src="https://firebasestorage.googleapis.com/v0/b/assets-e52f6.appspot.com/o/ecommerce-app%2Fbanners%2Fbanner1.webp?alt=media&token=20634ffe-4712-45b0-ad0a-4dc95493620c" alt=""/></div>
      </div>
    </div>
  )
}
