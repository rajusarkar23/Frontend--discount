import { CategoryBar } from "@/components/page-components/CategoryBar"
import { TopCarousl } from "@/components/page-components/TopCarousel"

const Home = () => {
  return (
    <main className="px-12 py-4">
      <div>
        <CategoryBar />
      </div>
      <div>
        <TopCarousl/>
      </div>
    </main>
  )
}

export default Home