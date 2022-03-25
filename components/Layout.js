import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className="bg-app-dark-blue text-app-pure-white h-screen">
      <Navigation />
      <div>
        <div>Search bar</div>
        {children}
      </div>
    </div>
  )
}
