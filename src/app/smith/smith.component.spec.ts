import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmithComponent } from './smith.component';

describe('SmithComponent', () => {
  let component: SmithComponent;
  let fixture: ComponentFixture<SmithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
