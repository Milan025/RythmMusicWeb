import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatagoriesComponent } from './manage-catagories.component';

describe('ManageCatagoriesComponent', () => {
  let component: ManageCatagoriesComponent;
  let fixture: ComponentFixture<ManageCatagoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCatagoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
