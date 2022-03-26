import Image from 'next/image'
import Link from 'next/link'

import AppLogo from './icons/AppIcon'
import IconNavBookmark from './icons/IconNavBookmark'
import IconNavHome from './icons/IconNavHome'
import IconNavMovie from './icons/IconNavMovie'
import IconNavTv from './icons/IconNavTv'
import NavigationIcon from './NavigationIcon'

export default function Navigation() {
  return (
    <nav className="bg-app-semi-dark-blue flex items-center justify-between p-5">
      <Link href="/" passHref>
        <span>
          <AppLogo />
        </span>
      </Link>
      <ul className="flex items-center justify-between w-2/5">
        <NavigationIcon href="/">
          <IconNavHome />
        </NavigationIcon>
        <NavigationIcon href="/movie">
          <IconNavMovie />
        </NavigationIcon>
        <NavigationIcon href="/tv">
          <IconNavTv />
        </NavigationIcon>
        <NavigationIcon href="/bookmark">
          <IconNavBookmark />
        </NavigationIcon>
      </ul>
      <div className="flex items-center justify-center rounded-full bg-app-pure-white p-px">
        <Image
          className="rounded-full"
          src={`https://source.unsplash.com/random`}
          alt="user avatar"
          height={24}
          width={24}
        />
      </div>
    </nav>
  )
}
