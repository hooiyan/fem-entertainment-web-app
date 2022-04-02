import Link from 'next/link'

export default function Heading({ href, title }) {
  return (
    <div className="heading-section">
      <h2 className="section-title">{title}</h2>
      <Link href={href} passHref>
        <span className="app-transition cursor-pointer text-xs font-medium uppercase tracking-wide text-app-greyish-blue hover:underline">
          See more
        </span>
      </Link>
    </div>
  )
}
