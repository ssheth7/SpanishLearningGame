import Link from "next/link"

export default function LinkList({ links, activeURL = null, className = null }) {
  return (
    <ul className={!!className ? className : null}>
      {Object.keys(links).map((key) => (
        <li key={key} activePage={!!activeURL && links[key].url == activeURL}>
          <Link href={links[key].url}>{links[key].name}</Link>
        </li>
      ))}
    </ul>
  )
}
