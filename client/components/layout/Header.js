import Head from "next/head"
import SEO from "./SEO"

export default function Header({ activePage = "/", ...input }) {
  return (
    <>
      <SEO {...input} />
    </>
  )
}
