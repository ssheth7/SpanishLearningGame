import AppLayout from "../components/layout/AppLayout"

import { getAllLevels } from "../utils/query/material"

export default function Home({ levels = [] }) {
  console.log({ levels })
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <AppLayout activePage="/">
        <h1 style={{ color: "green", textAlign: "center" }}>Spanish Learning Game</h1>
        <h2 style={{ color: "green", textAlign: "center" }}> Make It Fun To Learn SPANISH </h2>
        <hr />
        <img
          src={
            "https://media.istockphoto.com/vectors/spanish-language-hand-drawn-doodles-and-lettering-vector-id1082074870?k=20&m=1082074870&s=612x612&w=0&h=qte14fBvZRl1eRBI2GKc-q7N6HvPTtiRnBi6NKMdaL0="
          }
          alt="EasySpanish"
          style={{ display:'flex',justifyContent:'center', alignItems:'center'}}
        />

        <h2 style={{ color: "green", textAlign: "center" }}>Levels of Difficulty We Offer</h2>

        {(levels || []).map(({ id, title, description }) => (
          <div key={id}>
            <h3 style={{ color: "green", textAlign: "center" }}>{title}</h3>
            <p>{description}</p>
            <button style={{ height: "60px", width: "200" , display:"flex",justifyContent:"center",alignItems:"center"}}> Begin {title} Modules </button>
          </div>
        ))}
      </AppLayout>

      {/* call to action */}
      

      <hr />
      <h4 style={{ color: "black", textAlign: "center" }}> Please Rate Our Website And Voice Your Concerns </h4>
      <p style={{ color: "black", textAlign: "center" }}> We value our user's feedback and look to improve our website and usability. We aim to make a site that is easy to learn and easy to navigate. Please complete the survey below.</p>
      <button style={{ height: "60px", width: "200" }}><a href = "https://forms.gle/XMU5LQqEcPnC7Fi58" target="_blank"> Website Response Form</a></button>
      <button style={{ height: "60px", width: "200" }}><a href = "https://forms.gle/VbvCi4eiXm3jEL398" target="_blank"> Module Response Form</a></button>
    </div>
  )
}

export const getStaticProps = async () => {
  const allLevels = await getAllLevels()

  console.log(allLevels)

  return {
    props: {
      levels: Object.values(allLevels) || [],
    },
  }
}
