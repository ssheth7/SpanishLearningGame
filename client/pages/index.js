import AppLayout from "../components/layout/AppLayout"

import { getAllLevels } from "../utils/query/material"

export default function Home({ levels = [] }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <AppLayout activePage="/">
        <h1 style={{ color: "green", textAlign: "center" }}>Spanish Learning Game</h1>
        <h2 style={{ color: "green", textAlign: "center" }}> Learn SPANISH In Less Than 30 Days</h2>
        <hr />
        <img
          src={
            "https://media.istockphoto.com/vectors/spanish-language-hand-drawn-doodles-and-lettering-vector-id1082074870?k=20&m=1082074870&s=612x612&w=0&h=qte14fBvZRl1eRBI2GKc-q7N6HvPTtiRnBi6NKMdaL0="
          }
          alt="EasySpanish"
          style={{ alignSelf: "center" }}
        />

        <h2 style={{ color: "green", textAlign: "center" }}>Levels of difficulty we offer</h2>

        {levels.map(({ id, title, description }) => (
          <div key={id}>
            <h3 style={{ color: "green", textAlign: "center" }}>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </AppLayout>

      {/* call to action */}
      <button style={{ height: "60px", width: "200" }}> Start modules now </button>
    </div>
  )
}

export const getStaticProps = async () => {
  const allLevels = await getAllLevels()

  return {
    props: {
      levels: allLevels || [],
    },
  }
}
