import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  @Input() photo: string;

  constructor() {}

  ngOnInit(): void {}
}
