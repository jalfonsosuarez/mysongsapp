import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { CompanyComponent } from './pages/company/company.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { NewSongComponent } from './pages/new-song/new-song.component';
import { EditSongComponent } from './pages/edit-song/edit-song.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    SongCardComponent,
    ArtistComponent,
    ArtistCardComponent,
    CompanyComponent,
    CompanyCardComponent,
    NewSongComponent,
    EditSongComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
