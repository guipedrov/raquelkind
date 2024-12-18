"use client";
import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

export default function VimeoVideo() {
  const vimeoRef = useRef(null); // Referência para o iframe do vídeo
  const playerRef = useRef(null); // Referência para o player do Vimeo

  useEffect(() => {
    if (vimeoRef.current) {
      // Inicializa o player do Vimeo com a referência do iframe
      playerRef.current = new Player(vimeoRef.current);

      // Exemplo de como acessar eventos (opcional)
      playerRef.current.on('play', () => console.log('Video is playing'));
      playerRef.current.on('pause', () => console.log('Video is paused'));
    }

    // Cleanup ao desmontar o componente
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // Funções para controlar o vídeo
  const handlePlay = () => {
    playerRef.current.play();
  };

  const handlePause = () => {
    playerRef.current.pause();
  };

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        ref={vimeoRef}
        src="https://player.vimeo.com/video/1029029953?autoplay=1&muted=0&controls=0&background=1"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Vimeo Video"
        style={{ position: 'absolute', top: 0, left: 0 }}
      ></iframe>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}
