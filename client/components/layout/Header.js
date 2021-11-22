import SEO from "./SEO"
import styles from "./Header.module.css"

import { links, loginLinks } from "../../registry/nav"
import LinkList from "./../common/LinkList"

const PhysicalHeader = ({ activePage }) => {
  const loggedIn = false
  const username = ""
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <nav>
          <LinkList links={links} activeURL={activePage} />
        </nav>
      </div>
      <div className={styles.middleSection}></div>
      <div className={styles.rightSide}>
        <div className={styles.user}>
          {loggedIn ? (
            <div className={styles.userName}>
              <span>{username}</span>
            </div>
          ) : (
            <LinkList links={loginLinks} activeURL={null} />
          )}
        </div>
      </div>
    </div>
  )
}

export default function Header({ activePage = "/", ...props }) {
  return (
    <>
      <SEO {...props} />
      <PhysicalHeader activePage={activePage} />
    </>
  )
}
