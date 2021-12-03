import AppLayout from "../components/layout/AppLayout"

export default function Home() {
  return (
    <div style={{backgroundColor:'lightblue'}}>
	  
	    <AppLayout activePage="/">
	      <h1 style={{ color: 'green', textAlign: 'center' }}>Spanish Learning Game</h1>
	    </AppLayout>
	    
	    <hr></hr>
	    

	    <h2 style={{ color: 'green', textAlign: 'center' }}> Learn SPANISH In Less Than 30 Days</h2>

	    <img src={"https://media.istockphoto.com/vectors/spanish-language-hand-drawn-doodles-and-lettering-vector-id1082074870?k=20&m=1082074870&s=612x612&w=0&h=qte14fBvZRl1eRBI2GKc-q7N6HvPTtiRnBi6NKMdaL0="} alt="EasySpanish" style={{ alignSelf: 'center' }} />




	    <h2 style={{ color: 'green', textAlign: 'center' }}> We Offer Three Levels Of Diffcultly </h2>


	    <h3 style={{ color: 'green', textAlign: 'left' }}> Level 1 : Beginner </h3>
	    <p> This level is suggested for non-spanish speakers who have had minimial to no ability to speak Spanish. These modules are less diffcult and focus on basic terminology and everyday use of words. This is a great place to start in your journey to becoming a fluent Spanish speaker.  </p>
	    <h3 style={{ color: 'green', textAlign: 'left' }}> Level 2 : Intermediate </h3>
	    <p>This level is suggested for those who have had exposure to Spanish and understand every day words. These modules can be diffcult, but focus on constructing sentences using basic terminology and understanding tenses of vocabulary words. This module requires knowledge of basic terminology and everyday use of words.   </p>
	    <h3 style={{ color: 'green', textAlign: 'left' }}> Level 3 : Expert </h3>
	    <p>This level is suggested for those who have a strong understanding in Spanish and are looking to become a fluent Spanish-speaker. This module is diffcult and focuses on diffcult construction of sentences and paragraph writing. In addition, you must have extensive vocabulary and understand which tenses to use. This level is recommended for those who completed the Intermediate Level.</p>
	    

	    
	    <button style={{height: '60px', width : '200'}}> Start The Modules Now </button>
      
	    
	</div>

  )
}
