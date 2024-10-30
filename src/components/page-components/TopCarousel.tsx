import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function TopCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0"><img src="https://pub-4f375bc887d14901a460cf775d883a89.r2.dev/athens-7402123_1920.jpg" alt="" width={"800px"} height={"3000px"}/></div>
        <div className="flex-[0_0_100%] min-w-0"><img src="https://pub-4f375bc887d14901a460cf775d883a89.r2.dev/rome-5074421_1920.jpg" alt="" width={"820px"}/></div>
        <div className="flex-[0_0_100%] min-w-0"><img src="https://pub-4f375bc887d14901a460cf775d883a89.r2.dev/santorini-416136_1920.jpg" alt="" width={"820px"}/></div>
      </div>
    </div>
  )
}
