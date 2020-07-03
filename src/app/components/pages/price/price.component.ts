import { Component, OnInit } from '@angular/core';
import { PacketService } from 'src/app/services/packet.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit {
  packets: Array<{}>;

  constructor(private packetService: PacketService) {}

  ngOnInit(): void {
    this.packets = this.packetService.getPackets();
  }
}
