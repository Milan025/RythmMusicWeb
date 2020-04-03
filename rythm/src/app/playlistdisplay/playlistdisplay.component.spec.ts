import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistdisplayComponent } from './playlistdisplay.component';

describe('PlaylistdisplayComponent', () => {
  let component: PlaylistdisplayComponent;
  let fixture: ComponentFixture<PlaylistdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
