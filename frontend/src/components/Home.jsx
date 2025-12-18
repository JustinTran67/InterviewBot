import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// assets
import interviewBot from '../assets/interviewBot.png';

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
        <div className="flex flex-col gap-10 text-center">
            <div className="flex flex-row gap-4">
                <h1 className="text-4xl font-bold">Interview Bot</h1>
                <img src={interviewBot} alt="Interview Bot" className="w-12 h-12"/>
            </div>
            <div>
                <select className="bg-gray-300" value={jobRole} onChange={(e) => setJobRole(e.target.value)}>
                    <option value="" disabled>Select Job Role</option>
                    <option value="Software Engineer Intern">Software Engineer Intern</option>
                    <option value="Junior Software Engineer">Junior Software Engineer</option>
                    <option value="Senior Software Engineer">Senior Software Engineer</option>
                </select>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={handleSubmit}>Start Interview</button>
            </div>
        </div>
    )
}