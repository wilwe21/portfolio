import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;
    audio.load();

    const handlePlayPause = () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
	  }
    };
  }, [src]);

  return (
    <div>
      <audio ref={audioRef} controls={true} />
    </div>
  );
};

export default AudioPlayer;
