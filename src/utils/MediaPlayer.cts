// mediaPlayer.ts
import { globalShortcut } from 'electron';

// Importar dependências conforme o sistema operacional
let mediaControl: any;

if (process.platform === 'win32') {
  // Windows: usar o módulo 'node-media-controller'
  mediaControl = require('node-media-controller');
} else if (process.platform === 'darwin') {
  // macOS: usar o módulo 'media-key-tap'
  const MediaKeyTap = require('media-key-tap');
  mediaControl = new MediaKeyTap();
} else {
  // Linux: usar MPRIS ou outro adaptador
  try {
    mediaControl = require('mpris-service');
  } catch (error) {
    console.error('Não foi possível carregar o controle de mídia para este sistema operacional');
  }
}

interface MediaInfo {
  title: string;
  artist?: string;
  isPlaying: boolean;
}

export class MediaPlayer {
  private currentMediaInfo: MediaInfo = {
    title: 'Nenhuma mídia em reprodução',
    isPlaying: false
  };

  constructor() {
    this.setupMediaListeners();
  }

  private setupMediaListeners() {
    if (process.platform === 'win32') {
      // Windows
      mediaControl.on('play', () => {
        this.updateMediaInfo({ isPlaying: true });
      });
      
      mediaControl.on('pause', () => {
        this.updateMediaInfo({ isPlaying: false });
      });
      
      mediaControl.on('track', (track: any) => {
        this.updateMediaInfo({
          title: track.title || 'Desconhecido',
          artist: track.artist
        });
      });
    } else if (process.platform === 'darwin') {
      // macOS
      mediaControl.on('play', () => {
        this.updateMediaInfo({ isPlaying: true });
      });
      
      mediaControl.on('pause', () => {
        this.updateMediaInfo({ isPlaying: false });
      });
      
      // Observação: Pode ser necessário usar outro método para obter o título da faixa no macOS
    } else {
      // Linux (MPRIS)
      if (mediaControl && mediaControl.on) {
        mediaControl.on('playback-status-changed', (status: string) => {
          this.updateMediaInfo({ isPlaying: status === 'Playing' });
        });
        
        mediaControl.on('metadata-changed', (metadata: any) => {
          this.updateMediaInfo({
            title: metadata['xesam:title'] || 'Desconhecido',
            artist: metadata['xesam:artist']?.join(', ')
          });
        });
      }
    }
  }

  private updateMediaInfo(info: Partial<MediaInfo>) {
    this.currentMediaInfo = {
      ...this.currentMediaInfo,
      ...info
    };
  }

  public getMediaInfo(): MediaInfo {
    return this.currentMediaInfo;
  }

  public playPause() {
    if (process.platform === 'win32') {
      mediaControl.playPause();
    } else if (process.platform === 'darwin') {
      mediaControl.sendMediaKeyEvent('play-pause');
    } else if (mediaControl && mediaControl.playPause) {
      mediaControl.playPause();
    }
  }

  public next() {
    if (process.platform === 'win32') {
      mediaControl.next();
    } else if (process.platform === 'darwin') {
      mediaControl.sendMediaKeyEvent('next');
    } else if (mediaControl && mediaControl.next) {
      mediaControl.next();
    }
  }

  public previous() {
    if (process.platform === 'win32') {
      mediaControl.previous();
    } else if (process.platform === 'darwin') {
      mediaControl.sendMediaKeyEvent('previous');
    } else if (mediaControl && mediaControl.previous) {
      mediaControl.previous();
    }
  }
}