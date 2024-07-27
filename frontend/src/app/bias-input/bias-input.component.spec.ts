import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiasInputComponent } from './bias-input.component';

describe('BiasInputComponent', () => {
  let component: BiasInputComponent;
  let fixture: ComponentFixture<BiasInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiasInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiasInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
