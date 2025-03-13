// src/components/MediaPlayer.tsx
import { useEffect, useState } from "react";
import { ipcRenderer } from "electron"; // Importando ipcRenderer para comunicação com o main process

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar se o áudio está tocando

  useEffect(() => {
    // Adiciona o listener para o controle de mídia
    ipcRenderer.on("media-control-action", (_, action) => {
      const audio = document.getElementById("audio-player") as HTMLAudioElement;

      if (!audio) return;

      switch (action) {
        case "play-pause":
          if (audio.paused) {
            audio.play();
            setIsPlaying(true);
          } else {
            audio.pause();
            setIsPlaying(false);
          }
          break;
        case "next":
          console.log("Próxima faixa");
          // Lógica para próxima faixa
          break;
        case "previous":
          console.log("Faixa anterior");
          // Lógica para faixa anterior
          break;
        case "stop":
          audio.pause();
          audio.currentTime = 0;
          setIsPlaying(false);
          break;
        default:
          break;
      }
    });

    // Remover o listener ao desmontar o componente
    return () => {
      ipcRenderer.removeAllListeners("media-control-action");
    };
  }, []);

  // Funções para enviar comandos para o processo principal (ipcMain)
  const handlePlayPause = () => {
    ipcRenderer.send("media-control", "play-pause");
  };

  const handleStop = () => {
    ipcRenderer.send("media-control", "stop");
  };

  const handleNext = () => {
    ipcRenderer.send("media-control", "next");
  };

  const handlePrevious = () => {
    ipcRenderer.send("media-control", "previous");
  };

  return (
    <div>
      {/* Elemento de áudio */}
      <audio id="audio-player" src="musica.mp3" controls />

      {/* Botões de controle */}
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrevious}>Previous</button>
      </div>
    </div>
  );
};

export default MediaPlayer;
