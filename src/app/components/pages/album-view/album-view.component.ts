import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css'],
})
export class AlbumViewComponent implements OnInit {
  photos;
  albumType: string;

  private routeSubscription: Subscription;

  constructor(private albumService: AlbumService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe((params) => (this.albumType = params['albumType']));
  }

  ngOnInit(): void {
    // Присваиваем альбом из массива по ттипу из url
    this.photos = this.albumService.getAlbumForView(this.albumType)[0];
  }
}
