import { Component, OnInit } from '@angular/core';
import { OtzivService } from '../../../services/otziv.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  otzivi: Array<{}>;

  constructor(private otzivService: OtzivService) {}

  ngOnInit(): void {
    this.otzivi = this.otzivService.getFeedback();
  }
}
