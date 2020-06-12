import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate, AnimationEvent, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('menuOpen', [
      state(
        'closed',
        style({
          flexDirection: 'row',
        }),
      ),
      state(
        'opened',
        style({
          flexDirection: 'column',
        }),
      ),
      transition(
        'closed => opened',
        animate(
          '300ms ease-in',
          keyframes([
            style({ opacity: '.1', flexDirection: 'column', offset: 0 }),
            style({ opacity: '.5', offset: 0.5 }),
            style({ opacity: '1', offset: 1 }),
          ]),
        ),
      ),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  mobile: boolean = false;
  menuState: string = 'closed';

  // @HostBinding('@menuOpenTrigger') get state() {
  //   return this.mobile ? 'expanded' : 'closed';
  // }

  setClassMobile() {
    let classes = {
      _mobile: this.mobile,
    };
    return classes;
  }

  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.mobile = !this.mobile;
    this.menuState = this.mobile ? 'opened' : 'closed';
  }

  whenAnimate(event) {
    console.log(event);
  }

  closeMenu() {
    this.mobile = false;
    this.menuState = 'closed';
  }
}
