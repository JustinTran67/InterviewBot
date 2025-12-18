import { useEffect, useRef } from "react";

export default function TTSPlayer({ text }) {
  const audioRef = useRef(null);

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
        audio.play();

      } catch (err) {
        console.error("TTS Error:", err);
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

  return null;
}