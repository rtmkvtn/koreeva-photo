import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShootComponent } from './content-shoot.component';

describe('ContentShootComponent', () => {
  let component: ContentShootComponent;
  let fixture: ComponentFixture<ContentShootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentShootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
