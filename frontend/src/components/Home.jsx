import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// assets
import interviewBot from '../assets/InterviewBot.png';

export default function Home() {
    const [jobRole, setJobRole] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading , setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!jobRole) {
            alert("Please select a job role.");
            return;
        }
        try {
            setLoading(true);
            const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';
            const response = await fetch(`${API_BASE}/api/generate-questions/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ job_type: jobRole }),
            });

            const data = await response.json();
            setQuestions(data.questions);
        } catch (e) {
            console.error("Error:", e.message);
        } finally {
            setLoading(false);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (questions.length > 0) {
            navigate('/interview', { state: { questions, jobRole } });
        }
    })

    return (
        <div className="flex flex-col gap-10 items-center text-center opacity-0 animate-fade-in mb-40">
            <div className="flex flex-row gap-4 items-center">
                <h1 className="text-4xl font-bold font-jakarta">Interview Bot</h1>
                <img src={interviewBot} alt="Interview Bot" className="w-12 h-12 animate-jump"/>
            </div>
            <div>
                <input className="bg-gray-200 hover:bg-gray-300 transition duration-200 ease-in-out rounded-full w-[300px] md:w-[400px] px-4 py-2" value={jobRole} onChange={(e) => setJobRole(e.target.value)} placeholder="Enter Job Role e.g. Junior Software Engineer"></input>
            </div>
            <div>
                <button className="w-[150px] bg-yellow hover:bg-darkYellow transition duration-200 ease-in-out text-text px-4 py-2 rounded-full" onClick={handleSubmit}>{loading? 'Starting...' : 'Start Interview'}</button>
            </div>
        </div>
    )
}