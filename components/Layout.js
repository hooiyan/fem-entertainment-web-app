import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className="text-app-pure-white h-screen">
      <Navigation />
      <main className="flex flex-col py-6 px-4">{children}</main>
    </div>
  )
}
