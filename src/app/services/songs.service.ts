import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';
import { ArtistService } from './artist.service';
import { Artist } from '../interfaces/artist';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private artistService: ArtistService) {}

  async getAllSongs(): Promise<Song[]> {
    const songs: Song[] = await fetch('http://localhost:3000/songs').then(
      (resp) => resp.json()
    );
    songs.map(async (song) => {
      const artist: Artist = await this.artistService.getArtist(song.artist);
      song.artistObject = artist;
    });
    return songs;
  }
}
