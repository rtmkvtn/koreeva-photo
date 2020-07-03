import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { PriceComponent } from './components/pages/price/price.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { AlbumViewComponent } from './components/pages/album-view/album-view.component';
import { ContentShootComponent } from './components/pages/content-shoot/content-shoot.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  { path: 'price', component: PriceComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactsComponent },
  {
    path: 'album-view/:albumType',
    component: AlbumViewComponent,
  },
  { path: 'content-shoot', component: ContentShootComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
