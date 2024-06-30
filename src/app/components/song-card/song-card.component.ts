import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styles: ``,
})
export class SongCardComponent {
  @Input() item: Song | undefined;
}
