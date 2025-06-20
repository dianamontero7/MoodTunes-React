import React, {useState} from "react";
import "../questionai.css"

const QuestionAI = () => {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const handleAsk = async () => {
       setLoading(true)
       setAnswer('')
       setError('')

        try {
            const res = await fetch('http://localhost:5051/api/qa/ask', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({question})
            })

            const data = await res.json();

            if (data.answer) {
                setAnswer(data.answer)
            } else {
                setError('Sorry, I could not find an answer.')
            }  
        
         } catch (err){
                setError('Something went wrong. Please try again.')
         } finally{
                setLoading(false)
            }
        };
        

return(

    <div className="ai-section">

    <div className="ai-title">What's the Science Behind Music and Moods?</div>
    <div className="ai-subtitle">AI Powered Fun Facts</div>
    <div className="question-ai-container">

        {answer && !loading && <p className="question-ai-answer">{answer}</p>}
        {loading && <p className="question-ai-loading">Thinking...</p>}
        {error && <p className="question-ai-error">{error}</p>}

       <input
          type="text"
          placeholder="Ask me anything about music and emotions..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="question-ai-input"
       />

        <button onClick={handleAsk} className="question-ai-button">
       <span className="arrow-ai" >→ </span>
        </button>


    </div>

    </div>
)
}
export default QuestionAI;
