import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRainComponent } from './code-rain.component';

describe('CodeRainComponent', () => {
  let component: CodeRainComponent;
  let fixture: ComponentFixture<CodeRainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeRainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeRainComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
