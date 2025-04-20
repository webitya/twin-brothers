import HomeCallToActionSection from "@/Components/HomePage/HomePageCTA"
import HomePageCarousel from "@/Components/HomePage/HomePageHero"
import HomePageMassageTherapySection from "@/Components/HomePage/HomePageMassageTherapy"
import HomePageServicesSection from "@/Components/HomePage/HomePageServiceSection"

const HomePage=()=>{
  return (
    <>
      <HomePageCarousel/>
      <HomePageMassageTherapySection/>
      <HomePageServicesSection/>
      <HomeCallToActionSection/>
    
    </>
  )
}
export default HomePage