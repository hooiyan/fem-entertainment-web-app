import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className="text-app-pure-white h-screen lg:flex">
      <Navigation />
      <main className="flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:min-w-[800px] lg:ml-32">
        {children}
      </main>
      {/* <footer className="lg:hidden">Powered by TMDB</footer> */}
    </div>
  )
}
