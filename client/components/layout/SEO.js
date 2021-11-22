import Head from "next/head"

const defaults = {
  title: "Spanish Learning Game",
  _postTitle: "Spanish Learning Game",
  description: "A game for learning Spanish",
  keywords: ["game", "spanish", "learn spanish"],
  type: "website",
}

export default function SEO({ ...input }) {
  let meta = Object.assign({}, defaults, input)
  if (!meta.title.includes(defaults._postTitle)) meta.title = ` ${meta.title} | ${defaults._postTitle}`

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(", ")} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Head>
  )
}
