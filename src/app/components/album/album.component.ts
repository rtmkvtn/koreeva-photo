import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  @Input() album;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {}
}
