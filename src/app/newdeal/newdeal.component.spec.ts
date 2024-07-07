import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdealComponent } from './newdeal.component';

describe('NewdealComponent', () => {
  let component: NewdealComponent;
  let fixture: ComponentFixture<NewdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewdealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
