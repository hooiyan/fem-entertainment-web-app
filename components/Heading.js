import Link from 'next/link'

export default function Heading({ href, title }) {
  return (
    <div className="heading-section">
      <h2 className="section-title">{title}</h2>
      <Link href={href} passHref>
        <span className="cursor-pointer tracking-wide uppercase font-medium text-xs text-app-greyish-blue hover:underline app-transition">
          See all
        </span>
      </Link>
    </div>
  )
}
