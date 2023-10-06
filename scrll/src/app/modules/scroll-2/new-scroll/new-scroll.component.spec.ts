import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScrollComponent } from './new-scroll.component';

describe('NewScrollComponent', () => {
  let component: NewScrollComponent;
  let fixture: ComponentFixture<NewScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
