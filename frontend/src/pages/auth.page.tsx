import { Routes, Route } from "react-router-dom"
import SignUp from "../components/auth/signup"
import LogIn from "../components/auth/login"
import AnimationWrapper from "../utils/page-animation"
import AuthBanner from "../assets/images/manhwabg.jpg"

function AuthPage() {
  return (
    <AnimationWrapper>
      <main className="relative w-full h-full">
        <div className="auth-side-banner hidden md:block">
          <img src={AuthBanner} alt="banner-auth" loading="lazy" className="fixed top-0 left-0 h-screen w-96 object-cover overflow-hidden" />
        </div>
        <div id="auth-container" className="w-full h-full">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </div>
      </main>
    </AnimationWrapper>
  )
}

export default AuthPage