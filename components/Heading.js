export default function Heading({ title }) {
  return (
    <div className="heading-section">
      <h2 className="section-title">{title}</h2>
      <a className="cursor-pointer tracking-wide uppercase font-medium text-xs text-app-greyish-blue hover:underline app-transition">
        See all
      </a>
    </div>
  )
}

