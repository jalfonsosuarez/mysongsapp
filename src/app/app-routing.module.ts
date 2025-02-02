import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { CompanyComponent } from './pages/company/company.component';
import { NewSongComponent } from './pages/new-song/new-song.component';
import { ViewSongComponent } from './pages/view-song/view-song.component';
import { EditSongComponent } from './pages/edit-song/edit-song.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'newsong', component: NewSongComponent },
  { path: 'viewsong', component: ViewSongComponent },
  { path: 'editsong', component: EditSongComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
