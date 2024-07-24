import './Question.css'

export default function Question({ ques, answer }) {
    return (
        <div className='question'>
            <div className='ques-content'>
                <p>{ques}</p>
                <button>-</button>
            </div>
            <div className='answer'>
                <p>{answer}</p>
            </div>
        </div>
    )
}
