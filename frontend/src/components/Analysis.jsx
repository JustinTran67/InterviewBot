import { useNavigate } from 'react-router-dom';
import PlayAudio from './PlayAudio';

export default function Analysis({ overall, clarity, relevance, sentiment, strengths, improvements, feedback }) {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }

    return(
        <div className="flex flex-col gap-12 opacity-0 animate-fade-in">
            <div>
                <h1 className="text-4xl font-bold text-center font-jakarta"><span className="text-yellow">Recruiter</span> Review</h1>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-8 bg-gray-200 px-6 py-4 rounded-xl shadow-lg">
                    <div className="flex flex-row justify-between text-lg">
                        <h2>Attribute</h2>
                        <h2>Score</h2>
                    </div>
                    <div className="flex flex-col gap-2 font-jakarta">
                        <div className="flex flex-row justify-between">
                            <h3 className="text-xl font-semibold">Clarity</h3>
                            <span className={(clarity > 7)? "text-green-400 font-bold text-xl" : (clarity > 4)? "text-yellow font-bold text-xl" : "text-red-500 font-bold text-xl"}>{clarity}</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h3 className="text-xl font-semibold">Relevance</h3>
                            <span className={(relevance > 7)? "text-green-400 font-bold text-xl" : (relevance > 4)? "text-yellow font-bold text-xl" : "text-red-500 font-bold text-xl"}>{relevance}</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h3 className="text-xl font-semibold">Sentiment</h3>
                            <span className={(sentiment > 7)? "text-green-400 font-bold text-xl" : (sentiment > 4)? "text-yellow font-bold text-xl" : "text-red-500 font-bold text-xl"}>{sentiment}</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between font-jakarta">
                        <h2 className="text-2xl font-semibold">Overall</h2>
                        <span className={(overall > 7)? "text-green-400 font-bold text-2xl" : (overall > 4)? "text-yellow font-bold text-2xl" : "text-red-500 font-bold text-2xl"}>{overall}</span>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold font-jakarta">Strengths</h3>
                    {(strengths.length === 0) ? <p className="text-red-500">None</p> : 
                    <ul className="list-disc list-inside">
                        {strengths.map((strength, index) => (
                            <li key={index}>{strength}</li>
                        ))}
                    </ul>}
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold font-jakarta">Areas for Improvement</h3>
                    <ul className="list-disc list-inside">
                        {improvements.map((improvement, index) => (
                            <li key={index}>{improvement}</li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-xl font-semibold font-jakarta">Feedback</h3>
                    <p>{feedback}</p>
                </div>
            </div>
            <div className="text-center">
                <button className="bg-yellow hover:bg-darkYellow transition duration-200 ease-in-out px-4 py-2 rounded-full" onClick={goHome}>Back to Home</button>
            </div>
            <div className="fixed bottom-0 left-0 z-[9999]">
                <PlayAudio text={feedback} />
            </div>
        </div>
    )
}