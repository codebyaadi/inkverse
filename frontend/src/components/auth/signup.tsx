function SignUp() {
  return (
    <section className="w-full h-full flex justify-center items-center mt-6 md:px-0 px-5 font-dmsans text-base text-secondary">
      <form action="" className="font-medium md:w-1/3 w-full">
        <h1 className="text-xl mb-4">Sign up to <span className="text-primary font-unbounded">Inkverse</span></h1>
        <div id="full-name-container" className="flex flex-col md:flex-row gap-4">
          <div id="first-name-container" className="flex flex-col justify-center items-start">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" placeholder="Ex. John Doe" className="w-full text-sm border h-14 rounded-xl px-5 mt-1 outline-none focus:shadow-lightpink" />
          </div>
          <div id="last-name-container" className="flex flex-col justify-center items-start">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" className="w-full text-sm border h-14 rounded-xl px-5 mt-1 outline-none focus:shadow-lightpink" />
          </div>
        </div>
        <div id="username-container" className="flex flex-col justify-center items-start mt-4">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" className="w-full text-sm border h-14 rounded-xl px-5 mt-1 outline-none focus:shadow-lightpink" />
        </div>
        <div id="email-container" className="flex flex-col justify-center items-start mt-4">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="w-full text-sm border h-14 rounded-xl px-5 mt-1 outline-none focus:shadow-lightpink" />
        </div>
        <div id="password-container" className="flex flex-col justify-center items-start mt-4">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="w-full text-sm border h-14 rounded-xl px-5 mt-1 outline-none focus:shadow-lightpink" />
        </div>
        <div id="checkbox" className="flex justify-start mt-2">
          <input type="checkbox" name="checkbox" id="checkbox" className="appearance-none mr-2 rounded-sm border border-solid outline-0 flex shrink-0 w-5 h-5 checked:bg-blue-700 checked:border-0" />
          <label className="text-sm font-normal text-secondary/80">I agree with Inkverse's Terms of Service, Privacy Policy</label>
        </div>
        <button type="button" className="bg-secondary w-full h-14 px-5 rounded-full mt-4 text-white text-sm">
          Sign Up
        </button>
      </form>
    </section>
  )
}

export default SignUp