import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResordComponent } from './student-resord.component';

describe('StudentResordComponent', () => {
  let component: StudentResordComponent;
  let fixture: ComponentFixture<StudentResordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentResordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentResordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
