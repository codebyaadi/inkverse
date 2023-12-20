function LogIn() {
  return (
    <section className="w-full h-full flex justify-center items-center mt-6 md:px-0 px-5 font-dmsans">
      <form action="" className="font-dmsans text-base font-medium md:w-1/3 w-full">
        <h1 className="text-xl mb-4">Log in to <span className="text-primary font-unbounded">Inkverse</span></h1>
        <div id="email-container" className="flex flex-col justify-center items-start mt-4">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="w-full border h-14 rounded-xl px-5 mt-1 outline-none focus:shadow-lightpink" />
        </div>
        <div id="password-container" className="flex flex-col justify-center items-start mt-4">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="w-full border h-14 rounded-xl px-5 mt-1 outline-none focus:shadow-lightpink" />
        </div>
      </form>
    </section>
  )
}

export default LogIn