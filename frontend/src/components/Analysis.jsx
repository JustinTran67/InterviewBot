import { useNavigate } from 'react-router-dom';

export default function Analysis({ overall, clarity, relevance, sentiment, strengths, improvements, feedback }) {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }

    return(
        <div>
            <div>
                <h1 className="text-4xl font-bold mb-8 text-center">Results</h1>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Overall Score: {overall}</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Clarity: {clarity}</h3>
                    <h3 className="text-xl font-semibold">Relevance: {relevance}</h3>
                    <h3 className="text-xl font-semibold">Sentiment: {sentiment}</h3>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Strengths:</h3>
                    <ul className="list-disc list-inside">
                        {strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Areas for Improvement:</h3>
                    <ul className="list-disc list-inside">
                        {improvements.map((improvement, index) => (
                            <li key={index}>{improvement}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Final Feedback:</h3>
                    <p>{feedback}</p>
                </div>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={goHome}>Back to Home</button>
            </div>
        </div>
    )
}