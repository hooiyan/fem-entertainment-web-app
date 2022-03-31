import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className="text-app-pure-white lg:flex">
      <Navigation />
      <main className="flex flex-col py-6 px-4 w-full md:m-6 md:px-0 md:pt-0 lg:min-w-[800px] lg:ml-32">
        {children}
        <Footer />
      </main>
    </div>
  )
}
