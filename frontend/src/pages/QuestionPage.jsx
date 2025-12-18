import Question from '../components/Question';
import { useLocation } from 'react-router-dom';

export default function QuestionPage() {
    const location = useLocation();
    const { questions, jobRole } = location.state || {};
    return(
        <div>
            <Question questions={questions} jobRole={jobRole} />
        </div>
    )
}