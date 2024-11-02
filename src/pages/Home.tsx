import { CategoryBar } from "@/components/page-components/CategoryBar"
import { TopCarousel } from "@/components/page-components/TopCarousel"

const Home = () => {
  return (
    <main className="px-44 py-4">
      <div>
        <CategoryBar />
      </div>
      <div className="py-4">
        <TopCarousel/>
      </div>
    </main>
  )
}

export default Home