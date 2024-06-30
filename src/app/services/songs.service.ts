import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor() {}

  async getAllSongs(): Promise<Song[]> {
    const songs: Song[] = await fetch('http://localhost:3000/songs').then(
      (resp) => resp.json()
    );
    return songs;
  }
}
