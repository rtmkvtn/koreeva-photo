import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { PriceComponent } from './components/pages/price/price.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { AlbumComponent } from './components/album/album.component';
import { PictureComponent } from './components/picture/picture.component';
import { AlbumViewComponent } from './components/pages/album-view/album-view.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    PriceComponent,
    FeedbackComponent,
    ContactsComponent,
    FooterComponent,
    AlbumsListComponent,
    AlbumComponent,
    PictureComponent,
    AlbumViewComponent,
    AlbumPhotosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
