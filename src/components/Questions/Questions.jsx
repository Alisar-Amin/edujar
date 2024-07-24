import Question from '../Question/Question'
import './Questions.css'

export default function Questions() {
    const question = [
        {
            ques: 'Can Conversix sync my data to my CRM?',
            answer: 'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.'
        },
        {
            ques: 'How much data will I receive?',
            answer: 'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.'
        },
        {
            ques: 'Can marketers use Conversix data on behalf of client?',
            answer: 'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.'
        },
        {
            ques: 'How accurate is my data?',
            answer: 'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.'
        }
    ]
    return (
        <div className='questions'>
            <div className='left-side'>
                <p>Frequently Asked Questions</p>
                <h1>Any Questions? Find here.</h1>
                <button>Send Message</button>
            </div>
            <div>
                {
                    question.map(element => {
                        return (
                            <Question ques={element.ques} answer={element.answer}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
