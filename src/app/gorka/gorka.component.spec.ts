import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorkaComponent } from './gorka.component';

describe('GorkaComponent', () => {
  let component: GorkaComponent;
  let fixture: ComponentFixture<GorkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GorkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GorkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
