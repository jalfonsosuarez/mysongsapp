import { Component, Input } from '@angular/core';
import { Artist } from '../../interfaces/artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styles: ``,
})
export class ArtistCardComponent {
  @Input() item: Artist | undefined;

  getImage() {
    if (!this.item?.img) {
      return './assets/no_image.jpg';
    }

    return this.item?.img;
  }
}
