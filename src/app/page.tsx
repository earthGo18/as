import HeroSection from "@/components/hero-section"
import ConnectingTravelers from "@/components/connecting-travelers"
import ExploreAdventures from "@/components/explore-adventures"
import AffordableTrips from "@/components/affordable-trips"
import SoloTravelers from "@/components/solo-travelers"
import JoinCommunity from "@/components/join-community"
import AiPlanner from "@/components/ai-planner"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Join from "@/components/join"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="px-4 md:px-12 lg:px-20"> {/* Horizontal padding added */}
        <HeroSection />
        <section className="w-full h-screen">
          <ConnectingTravelers />
        </section>
        <section className="w-full h-screen">
          <ExploreAdventures />
        </section>
        <section className="w-full h-screen">
          <AffordableTrips />
        </section>
        <section className="w-full h-screen">
          <SoloTravelers />
        </section>
        <section className="w-full h-screen">
          <JoinCommunity />
        </section>
      <section className="w-full h-screen">
          <Join />
        </section>

        <section className="w-full h-screen">
          <AiPlanner />
        </section>
      </div>
      <Footer />
    </main>
  )
}
