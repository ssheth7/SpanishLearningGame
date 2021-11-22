import Head from "next/head"
import { app } from "../../registry/app"

const defaults = {
  title: "",
  ...app
}

export default function SEO({ ...input }) {
  let meta = Object.assign({}, defaults, input)
  const title = meta.title == "" ? meta.appname : meta.title + " | " + meta.appname
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta.description} />
    </Head>
  )
}
