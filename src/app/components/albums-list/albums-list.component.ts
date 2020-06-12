import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
})
export class AlbumsListComponent implements OnInit {
  albums: Array<{}>;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albums = this.albumService.getAlbums();
  }
}
