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
    <nav className="bg-app-semi-dark-blue flex items-center justify-between p-5 sticky top-0 z-50 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:flex-col lg:mr-0 lg:fixed lg:left-0 lg:h-5/6 lg:py-9">
      <Link href="/" passHref>
        <span>
          <AppLogo />
        </span>
      </Link>
      <ul className="flex items-center justify-between w-1/2 2xs:w-2/5 lg:flex-col lg:h-[200px]">
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
