import { Injectable } from '@angular/core';
import { Artist } from '../interfaces/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor() {}

  async getAllArtists(): Promise<Artist[]> {
    const artists: Artist[] = await fetch('http://localhost:3000/artists').then(
      (resp) => resp.json()
    );
    return artists;
  }

  async getArtist(id: number): Promise<Artist> {
    const artist: Artist[] = await fetch(
      `http://localhost:3000/artists?id=${id}`
    ).then((resp) => resp.json());
    return artist[0];
  }
}
