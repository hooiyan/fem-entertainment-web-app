import Image from 'next/image'
import IconTMDBLong from '../assets/icon-tmdb-long.svg'

export default function Footer() {
  return (
    <footer className="text-center text-app-greyish-blue text-xs pb-6">
      <p>Powered by</p>
      <a
        href="https://www.themoviedb.org/about/logos-attribution"
        target="_blank"
        rel="noreferrer">
        <Image
          src={IconTMDBLong}
          width={150}
          height={20}
          alt="powered by TMDB"
        />
      </a>
    </footer>
  )
}
