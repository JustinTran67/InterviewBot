import { useState, useEffect, useRef } from "react";
// assets
import Idle from "../assets/BotIdle.png";
import Speaking from "../assets/BotTalking.png";
import Speaking2 from "../assets/InterviewBot.png";

export default function PlayAudio({ text, size = "w-24 h-24" }) {
  const audioRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (!text) return;

    const fetchAudio = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";
        const response = await fetch(`${API_BASE}/api/tts/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        const audio = new Audio(url);
        audioRef.current = audio;

        audio.onplay = () => setIsSpeaking(true);
        audio.onended = () => setIsSpeaking(false);
        audio.onpause = () => setIsSpeaking(false);

        audio.play();

      } catch (e) {
        console.error("TTS Error:", e);
        setIsSpeaking(false);
      }
    };

    fetchAudio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [text]);

  return(
    <div className={size}>
      <img src={isSpeaking ? Speaking : Idle} alt="TTS Bot" className="w-full h-full" />
    </div>
  );
}