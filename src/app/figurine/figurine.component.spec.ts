import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurineComponent } from './figurine.component';

describe('FigurineComponent', () => {
  let component: FigurineComponent;
  let fixture: ComponentFixture<FigurineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigurineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigurineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
