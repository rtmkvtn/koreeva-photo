import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-otziv',
  templateUrl: './otziv.component.html',
  styleUrls: ['./otziv.component.css'],
})
export class OtzivComponent implements OnInit {
  @Input() otziv;

  constructor() {}

  ngOnInit(): void {}
}
