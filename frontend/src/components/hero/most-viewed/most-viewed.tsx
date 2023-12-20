import { Link } from "react-router-dom"
import data from "../../../temp/testdata.json"

function MostViewed() {
  return (
    <section id="most-viewed-section" className="flex justify-start mt-7">
      <div id="most-viewed-container" className="font-dmsans overflow-hidden">
        <div id="most-viewed-heading">
          <header className="font-medium tracking-tight text-xl">Discover the Hottest Releases</header>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-start items-center gap-3 mt-3 snap-x no-scrollbar overflow-x-auto">
            {data.map((card, index) => (
              <Link to="/" key={index} className="group relative w-64 h-64 shrink-0 rounded overflow-hidden snap-center">
                <img src={card.cover} alt={card.cover} className="w-full h-full object-cover" />
                <div className="group-hover:flex flex-col hidden absolute bottom-0 left-0 right-0 bg-[#10131f]/40 backdrop-blur m-2 p-4 rounded-md">
                  <h6 className="font-medium text-base text-white truncate mb-1">{card.title}</h6>
                  <div className="flex justify-start items-start gap-1">
                    {card.categories.map((genre, index) => (
                      <span key={index} className="text-xs rounded-sm bg-white px-2 py-0.5 truncate">{genre}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MostViewed