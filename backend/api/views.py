from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from openai import OpenAI
import os, json

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class GenerateQuestion(APIView):
    
    def post(self, request, format=None):

        job_type = request.data.get("job_type", "")
    
        prompt = f"""
        You are a job recruiter/hiring manager interviewing for a {job_type} position.

        Generate 5-7 interview questions that are relevant to the job type specified.

        Return ONLY JSON.
        Do NOT wrap the JSON in markdown like ```json.
        Do NOT include explanations.

        Generate the questions in JSON format like so:
        {{
            "questions": [
                "Question 1",
                "Question 2",
                ...
            ]
        }}
        """

        try:
            completion = client.responses.create(
                model="gpt-4o-mini",
                input=prompt,
            )

            response_text = completion.output_text
            print("RAW LLM RESPONSE:", response_text)
            data = json.loads(response_text)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response(data, status=status.HTTP_200_OK)

class AnalyzeResponse(APIView):

    def post (self, request, format=None):

        user_response = request.data.get("response", [])

        if not user_response:
            return Response({"error": "No candidate response provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        formatted_response = ""
        for i, item in enumerate(user_response, start=1):
            question = item.get("question", "")
            answer = item.get("answer", "")

            formatted_response += f"""
            Question {i}: {question}
            Answer{i}: {answer}
            """

        prompt = f"""
        You are an expert job recruiter/hiring manager.

        Analyze the following candidate responses to the interview questions and provide feedback based on:

        1. Clarity
        2. Relevance to the role
        3. Sentiment

        Candidate Response:
        {formatted_response}

        Return ONLY JSON.
        Do NOT wrap the JSON in markdown like ```json.
        Do NOT include explanations.

        Return ONLY valid JSON in this format:
        {{
          "overall_score": number (1-10),
          "breakdown": {{
            "clarity": number,
            "relevance": number,
            "sentiment": number
          }},
          "strengths": ["strength 1", "strength 2"],
          "areas_for_improvement": ["improvement 1", "improvement 2"],
          "final_feedback": "summary text"
        }}
        """

        try:
            completion = client.responses.create(
                model="gpt-4o-mini",
                input=prompt,
            )

            response_text=completion.output_text
            print("RAW LLM RESPONSE:", response_text)
            data = json.loads(response_text)
        
        except Exception as e:
            return Response({"error": f"Analysis failed to generate: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response(data, status=status.HTTP_200_OK)