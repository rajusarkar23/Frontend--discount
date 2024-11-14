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
      <div>
      <img src="https://res.cloudinary.com/dhwxejlhv/image/upload/v1720787026/p27vig7qkejds7dks4om.jpg" alt="img" width={"150px"}/>
      </div>
    </main>
  )
}

export default Home