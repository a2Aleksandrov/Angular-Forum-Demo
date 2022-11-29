import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllThemesComponent } from './all-themes.component';

describe('AllThemesComponent', () => {
  let component: AllThemesComponent;
  let fixture: ComponentFixture<AllThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllThemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
