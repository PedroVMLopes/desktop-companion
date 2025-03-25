// MediaController.tsx
import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaBackwardStep, FaForwardStep } from "react-icons/fa6";

// Interface para comunicação com o processo principal do Electron
const { ipcRenderer } = require('electron');

interface MediaInfo {
  title: string;
  artist?: string;
  isPlaying: boolean;
}

const MediaController: React.FC = () => {
  const [mediaInfo, setMediaInfo] = useState<MediaInfo>({
    title: 'Nenhuma mídia em reprodução',
    isPlaying: false
  });

  useEffect(() => {
    // Configurar os listeners para atualizações de informações da mídia
    ipcRenderer.on('media-info-update', (_event: MediaInfo, info: MediaInfo) => {
      setMediaInfo(info);
    });

    // Solicitar informações iniciais da mídia
    ipcRenderer.send('request-media-info');

    // Limpar os listeners quando o componente for desmontado
    return () => {
      ipcRenderer.removeAllListeners('media-info-update');
    };
  }, []);

  // Funções para controlar a mídia
  const handlePlayPause = () => {
    ipcRenderer.send('media-play-pause');
  };

  const handlePrevious = () => {
    ipcRenderer.send('media-previous');
  };

  const handleNext = () => {
    ipcRenderer.send('media-next');
  };

  return (
    <div className="bg-base-100 p-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <div className="mb-4 text-center">
          <h3 className="font-bold text-lg truncate max-w-xs">{mediaInfo.title}</h3>
          {mediaInfo.artist && (
            <p className="text-sm">{mediaInfo.artist}</p>
          )}
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={handlePrevious}
            className="hover:text-white focus:outline-none transition"
          >
            <FaBackwardStep size={24} />
          </button>
          
          <button 
            onClick={handlePlayPause}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full focus:outline-none transition"
          >
            {mediaInfo.isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
          
          <button 
            onClick={handleNext}
            className=" hover:text-white focus:outline-none transition"
          >
            <FaForwardStep size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaController;