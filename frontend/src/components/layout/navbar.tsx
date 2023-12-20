import { Link } from "react-router-dom";
import { SearchNormal1 } from "iconsax-react";
import { useEffect, useState } from "react";

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`sticky top-0 left-0 z-10  ${scrolling ? "bg-white" : "bg-transparent"}`}
        >
            <div id="nav-container" className="flex justify-between items-center m-auto max-w-7xl md:px-8 md:py-4 px-5 py-2.5">
                <div id="left-nav-eles" className="flex justify-center items-center gap-4">
                    <div
                        id="logo"
                        className="text-primary font-unbounded md:font-bold font-semibold md:text-2xl text-xl tracking-wide"
                    >
                        <Link to="/">Inkverse</Link>
                    </div>
                    <div className="bg-[#F4F5FB] px-4 py-4 text-center rounded-full md:flex hidden items-center mr-4">
                        <SearchNormal1 size="18" className="text-zinc-600" />
                        <input
                            type="text"
                            name="search-bar"
                            id="search-inbut"
                            placeholder="Ex. Marry my husband..."
                            className="bg-transparent w-40 h-4 ml-2 outline-none font-dmsans text-sm placeholder:text-slate-300"
                        />
                    </div>
                </div>
                <div id="right-nav-eles" className="flex justify-center items-center">
                    <div
                        id="auth-button"
                        className="flex justify-center items-center md:gap-6 gap-4 font-prompt text-sm leading-none"
                    >
                        <Link to="/auth/login" className="py-4 text-center text-black">
                            Log In
                        </Link>
                        <Link
                            to="/auth/signup"
                            className="bg-primary px-6 py-4 text-center text-white rounded-full flex items-center"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;