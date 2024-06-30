import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songsService: SongsService) {}

  async ngOnInit() {
    this.songs = await this.songsService.getAllSongs();
  }
}
