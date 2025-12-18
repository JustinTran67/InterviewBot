import Analysis from "../components/Analysis";
import { useLocation } from "react-router-dom";

export default function AnalysisPage() {
    const location = useLocation();
    const analysis = location.state?.analysis || {};
    const {
        overall_score: overall,
        breakdown: {
          clarity,
          relevance,
          sentiment
        },
        strengths,
        areas_for_improvement: improvements,
        final_feedback: feedback
      } = analysis;
    
    return(
        <div>
            <Analysis overall={overall} clarity={clarity} relevance={relevance} sentiment={sentiment} strengths={strengths} improvements={improvements} feedback={feedback} />
        </div>
    )
}