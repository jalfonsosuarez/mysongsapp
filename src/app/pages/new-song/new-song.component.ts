import { Component } from '@angular/core';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styles: ``,
})
export class NewSongComponent {
  title: string = '';
  artist: string = '';
  genre: string = '';
  company: string = '';
  country: string = '';
  year: string = '';
  valuation: number = 0;
}
