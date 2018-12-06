import { Injectable } from '@angular/core';

import { Song } from './song.interface'

@Injectable()
export class SongsService {

  constructor() { }

  private readonly songList: Song[] = [
    {
      artist: 'Rick Astley',
      title: 'Never Gonna Give You Up',
      audio: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.mp3',
      lyrics: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.lrc',
      lyricDelay: 1,
      imageFileName: 'artist-2.jpg'
    },
    {
      artist: 'Journey',
      title: 'Don\'t Stop Believing',
      audio: 'assets/songs/dont-stop-believing/dont-stop-believing.mp3',
      lyrics: 'assets/songs/dont-stop-believing/dont-stop-believing.lrc',
      lyricDelay: 1,
      imageFileName: 'artist-1.jpg'
    },
    {
      artist: 'Tobymac',
      title: 'I just need you',
      audio: 'assets/songs/i-just-need-you/i-just-need-you.mp3',
      lyrics: 'assets/songs/i-just-need-you/i-just-need-you.lrc',
      lyricDelay: 1,
      imageFileName: 'tobymac.jpg'
    },
  ]

  getSongList() {
    return this.songList
  }

}
