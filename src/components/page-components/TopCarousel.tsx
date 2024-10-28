import Autoplay from "embla-carousel-autoplay"
import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"

export const TopCarousl = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 800, stopOnInteraction: false })
      )
     
      return (
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-m"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
    }
