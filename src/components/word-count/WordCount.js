import React, {useState, useRef} from 'react'

function WordCount() {
    const [text, setText] = useState("")
   
    const [wordCount, setWordCount] = useState(0) 
    const textBoxRef = useRef(null)


    function startWordCount() {
        setWordCount(0)
        setText("")
    }


    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length 
    }


    function handleChange(e) {
        const {value} = e.target 
        setText(value) 
    }

    function finalWordCount() {
        setWordCount(calculateWordCount(text))
    }

    return(
      <div>
          <h1>{startWordCount} 0</h1>
          <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                className="border-2 border-pink-500 rounded"
            />

            {calculateWordCount}
            {finalWordCount}
      </div>  
    )
}

export default WordCount  