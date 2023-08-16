import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsAfiliationComponent } from './eps-afiliation.component';

describe('EpsAfiliationComponent', () => {
  let component: EpsAfiliationComponent;
  let fixture: ComponentFixture<EpsAfiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpsAfiliationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpsAfiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
