"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function ProfileVideo() {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const reversingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isDark = theme === "dark";

    if (isDark) {
      // FORWARD: just let the browser play it natively
      reversingRef.current = false;
      video.playbackRate = 1;
      video.play();
    } else {
      // REVERSE: manually step currentTime backward, frame by frame
      video.pause(); // stop any forward playback first
      reversingRef.current = true;

      const stepBack = () => {
        if (!reversingRef.current) return;

        if (video.currentTime <= 0.03) {
          video.currentTime = 0;
          reversingRef.current = false;
          return;
        }

        video.currentTime = Math.max(0, video.currentTime - 0.03);
      };

      const onSeeked = () => {
        if (reversingRef.current) stepBack();
      };

      video.addEventListener("seeked", onSeeked);
      stepBack();

      return () => {
        video.removeEventListener("seeked", onSeeked);
        reversingRef.current = false;
      };
    }
  }, [theme]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      className="h-40 w-40 rounded-xl object-cover sm:h-48 sm:w-48 md:h-64 md:w-64"
    >
      <source src="/videos/profile-transition.mp4" type="video/mp4" />
    </video>
  );
}