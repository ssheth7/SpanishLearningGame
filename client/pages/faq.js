import AppLayout from "../components/layout/AppLayout"
import Footer from "../components/layout/Footer"
import { getAllLevels } from "../utils/query/material"
import AppContainer from "../components/common/AppContainer"
import Jumbotron from "../components/common/Jumbotron"

import CardLayout from "../components/common/CardLayout"

// TODO add questions here
const questions = [
  {
    question: "What is a question?",
    answer: "This is an answer.",
  },
  {
    question: "What is another question?",
    answer: "This is another answer.",
  },
]

export default function FAQ() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <AppLayout activePage="/">
        <AppContainer>
          <Jumbotron>
            <h1>Frequently asked questions</h1>
            <h2>A knowledgebase of questions you may have.</h2>
          </Jumbotron>

          {questions.map(({ question, answer }) => (
            <CardLayout key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </CardLayout>
          ))}
        </AppContainer>
      </AppLayout>

      <Footer />
    </div>
  )
}
