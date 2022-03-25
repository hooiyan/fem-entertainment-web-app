import Image from 'next/image'
import Link from 'next/link'

import AppLogo from '../assets/logo.svg'

import IconBookmark from './icons/IconNavBookmark'
import IconHome from './icons/IconNavHome'
import IconMovie from './icons/IconNavMovie'
import IconTv from './icons/IconNavTv'
import NavigationIcon from './NavigationIcon'

export default function Navigation() {
  return (
    <nav className="bg-app-semi-dark-blue flex items-center justify-between p-5">
      <Link href="/" passHref>
        <Image src={AppLogo} alt="app logo" height={20} width={25} />
      </Link>
      <ul className="flex justify-between w-1/2">
        <NavigationIcon href="/">
          <IconHome />
        </NavigationIcon>
        <NavigationIcon href="/movie">
          <IconMovie />
        </NavigationIcon>
        <NavigationIcon href="/tv">
          <IconTv />
        </NavigationIcon>
        <NavigationIcon href="/bookmark">
          <IconBookmark />
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
