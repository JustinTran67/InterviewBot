import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import PlayAudio from './PlayAudio';

export default function Question({ questions, jobRole }) {
    const [responses, setResponses] = useState(
        questions.map((q, i) => ({
            question: q,
            answer: ""
        }))
    );
    const [analysis, setAnalysis] = useState(null);
    const [currIndex, setCurrIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    // handle question nav
    const handlePrev = () => {
        if (currIndex > 0) {
            setCurrIndex(currIndex - 1);
        }
    }
    const handleNext = () => {
        if (currIndex < questions.length - 1) {
            setCurrIndex(currIndex + 1);
        }
    }

    // for text box
    const handleChange = (index, value) => {
        setResponses(prev =>
            prev.map((item, i) =>
                i === index ? {...item, answer: value} : item
            )
        );
    }

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    // api call analysis
    const handleSubmit = async (e) => {
        e.preventDefault();
        const hasEmptyAnswer = responses.some(
            r => !r.answer || r.answer.trim() === ""
        );
        
        if (hasEmptyAnswer) {
            alert("Please respond to all questions before submitting.");
            return;
        }
        try {
            setLoading(true);
            const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';
            const response = await fetch(`${API_BASE}/api/analyze-response/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ response: responses }),
            });

            const data = await response.json();
            setAnalysis(data);
            navigate('/analysis', { state: { analysis: data } });
        } catch (e) {
            console.error("Error:", e.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="flex flex-col gap-4 w-full opacity-0 animate-fade-in">
            <div className="flex flex-col gap-2 text-center mb-4">
                <h1 className="" >Interview Progress</h1>
                <div>
                    Question <span className="">{currIndex + 1}</span> of {questions.length} - <span className="text-blue font-bold">{jobRole}</span>
                </div>
            </div>
            <div className="w-full">
                <QuestionBox question={responses[currIndex].question} value={responses[currIndex]?.answer} onChange={(e) => handleChange(currIndex, e)} />
            </div>
            <div>
                <div className="flex flex-row justify-between">
                    <button className="bg-yellow hover:bg-darkYellow transition duration-200 ease-in-out text-text w-[150px] px-4 py-2 rounded-full" onClick={handlePrev} disabled={currIndex === 0}>Previous</button>
                    <button className="bg-yellow hover:bg-darkYellow transition duration-200 ease-in-out text-text w-[150px] px-4 py-2 rounded-full" onClick={goHome}>Home</button>
                    {currIndex === questions.length - 1 ? (
                        <button className="bg-blue hover:bg-darkBlue transition duration-200 ease-in-out text-white w-[150px] px-4 py-2 rounded-full" onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    ) : (
                        <button className="bg-yellow hover:bg-darkYellow transition duration-200 ease-in-out w-[150px] px-4 py-2 rounded-full" onClick={handleNext}>Next</button>
                    )}
                </div>
            </div>
        </div>
    )
}

function QuestionBox ({ question, value, onChange}) {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-end">
                <PlayAudio text={question} />
                <h3 className="w-[200px] text-sm md:text-lg md:w-[800px]">{question}</h3>
            </div>
            <textarea className="bg-gray-200 p-4 w-full h-[300px] rounded-xl shadow-md" placeholder="Type your answer here..." value={value} onChange={(e) => onChange(e.target.value)}></textarea>
        </div>
    )
}