import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLibraryComponent } from './ng-library.component';

describe('NgLibraryComponent', () => {
  let component: NgLibraryComponent;
  let fixture: ComponentFixture<NgLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
