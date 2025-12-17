import { useState, useEffect } from 'react';

export default function Home() {
    const [jobRole, setJobRole] = useState('');
    const [questions, setQuestions] = useState([]);

    const handleSubmit = async (e) => {

    }

    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1 className="text-4xl font-bold">Interview Bot</h1>
            </div>
            <div>
                <select value={jobRole} onChange={(e) => setJobRole(e.target.value)}>
                    <option value="" disabled selected>Select Job Role</option>
                    <option value="Software Engineer Intern">Software Engineer Intern</option>
                    <option value="Junior Software Engineer">Junior Software Engineer</option>
                    <option value="Senior Software Engineer">Senior Software Engineer</option>
                </select>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full" rounded onClick={handleSubmit}>Start Interview</button>
            </div>
        </div>
    )
}