import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styles: ``,
})
export class EditSongComponent {
  title: string = '';
  artist: string = '';
  genre: string = '';
  company: string = '';
  country: string = '';
  year: string = '';
  valuation: number = 0;
}
