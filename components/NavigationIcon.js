import Link from 'next/link'

export default function NavigationIcon({ children, href }) {
  return (
    <Link href={href} passHref>
      <li className='cursor-pointer'>{children}</li>
    </Link>
  )
}
