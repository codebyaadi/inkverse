import Carousel from "../components/hero/carousel/carousel"
import EventBanner from "../components/hero/events/event-banner"
import MostViewed from "../components/hero/most-viewed/most-viewed"
import data from "../temp/testdata.json"

function Homepage() {
  return (
    <main className="m-auto max-w-7xl md:px-8 md:py-4 px-5 py-2.5">
        <Carousel data={data} />
        <EventBanner />
        <MostViewed />
    </main>
  )
}

export default Homepage