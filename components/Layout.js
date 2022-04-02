import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className="text-app-pure-white lg:flex">
      <Navigation />
      <main className="mx-0 flex grow flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32">
        {children}
        <Footer />
      </main>
    </div>
  )
}
