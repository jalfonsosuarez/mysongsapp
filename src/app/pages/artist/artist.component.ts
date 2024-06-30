import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private artistsService: ArtistService) {}

  async ngOnInit() {
    this.artists = await this.artistsService.getAllArtists();
  }
}
