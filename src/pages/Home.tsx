import { CategoryBar } from "@/components/page-components/CategoryBar"
import { ShowMobiles } from "@/components/page-components/ShowMobiles"
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
      {/* show products */}
      <div className="py-9 mb-[100px]">
        <ShowMobiles />
      </div>
    </main>
  )
}

export default Home