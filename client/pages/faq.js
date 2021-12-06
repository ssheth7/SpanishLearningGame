import AppLayout from "../components/layout/AppLayout"
import Footer from "../components/layout/Footer"
import { getAllLevels } from "../utils/query/material"
import AppContainer from "../components/common/AppContainer"
import Jumbotron from "../components/common/Jumbotron"

import CardLayout from "../components/common/CardLayout"

// TODO add questions here
const questions = [
  {
    question: "What is this website?",
    answer: "This website gives people an opportunity to learn Spanish on a quick and easy to use interface.",
  },
  {
    question: "How do I use this website?",
    answer: "First, the home page presents different difficulties for you to start with. Read through the different options and pick what works for you! In each level, \
    there are modules that teach you different topics. Each module contains a preliminary exam, learning flashcards, and a quiz. The accompanying quiz tests you on the material taught\
    taught in the module. You need an 80% to successfully complete a quiz.",
  },
  {
    question: "Where can I send feedback?",
    answer: "We love hearing from our users! You can find the feedback form by clicking the \"Feedback\" tab on the navigation bar on top."
  },
  {
    question: "Do I have to start at the beginner difficulty?",
    answer: "No, we provide users of different skill levels to start wherever they see fit!",
  },
  {
    question: "How can I create an account?",
    answer: "You can create an account by clicking the \"Create an Account\" tab on the navigation bar on top."
  },
  {
    question: "How do I see the flashcard term definitions?",
    answer: "You can flip over the flashcards and see the definitions by clicking on them!"
  }
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
              <br></br>
              <p>{answer}</p>
            </CardLayout>
          ))}
        </AppContainer>
      </AppLayout>

      <Footer />
    </div>
  )
}
