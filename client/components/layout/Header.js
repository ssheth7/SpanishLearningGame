import SEO from "./SEO"
import styles from "./Header.module.css"

import { links, loginLinks, logoutLinks } from "../../registry/nav"
import LinkList from "./../common/LinkList"

import { useAuth } from "../../utils/hooks/auth"

const PhysicalHeader = ({ activePage }) => {
  const { user } = useAuth()
  console.log({ user })
  const loggedIn = user && !!user._id
  const username = user?.email ? user?.email.split("@")[0] : "Guest"
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
              <span>Hi, {username}</span>
              <LinkList links={logoutLinks} activeURL={null} />
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
