import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagorydisplayComponent } from './catagorydisplay.component';

describe('CatagorydisplayComponent', () => {
  let component: CatagorydisplayComponent;
  let fixture: ComponentFixture<CatagorydisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagorydisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagorydisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
