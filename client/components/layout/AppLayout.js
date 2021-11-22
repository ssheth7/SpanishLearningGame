import Header from "./Header"

const AppBody = ({ children }) => {
  return <>{children}</>
}

export default function AppLayout({ title = "", activePage = "/", children }) {
  return (
    <>
      <Header title={title} activePage={activePage} />
      <AppBody>{children}</AppBody>
    </>
  )
}
