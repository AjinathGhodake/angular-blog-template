import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPostComponent } from './past-post.component';

describe('PastPostComponent', () => {
  let component: PastPostComponent;
  let fixture: ComponentFixture<PastPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
