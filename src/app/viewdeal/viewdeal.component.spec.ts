import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdealComponent } from './viewdeal.component';

describe('ViewdealComponent', () => {
  let component: ViewdealComponent;
  let fixture: ComponentFixture<ViewdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewdealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
