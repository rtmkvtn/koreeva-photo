import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packet',
  templateUrl: './packet.component.html',
  styleUrls: ['./packet.component.css'],
})
export class PacketComponent implements OnInit {
  @Input() packet;

  constructor() {}

  ngOnInit(): void {}
}
