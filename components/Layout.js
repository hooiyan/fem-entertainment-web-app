import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className="bg-app-dark-blue text-app-pure-white h-screen">
      <Navigation />
      <main className="flex flex-col py-6 px-4">{children}</main>
    </div>
  )
}
