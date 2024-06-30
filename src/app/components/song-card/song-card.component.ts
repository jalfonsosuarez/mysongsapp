import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../interfaces/song';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styles: ``,
})
export class SongCardComponent {
  @Input() item: Song | undefined;

  constructor(private artistService: ArtistService) {}

  getImage() {
    if (!this.item?.poster) return './assets/no_image.jpg';

    return this.item?.poster;
  }

  getGenrers(genrers: string[] | undefined) {
    if (!genrers || genrers.length === 0) return '';
    return '# ' + genrers.join('  # ');
  }
}
