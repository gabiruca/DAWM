import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasFComponent } from './recetas-f.component';

describe('RecetasFComponent', () => {
  let component: RecetasFComponent;
  let fixture: ComponentFixture<RecetasFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetasFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
