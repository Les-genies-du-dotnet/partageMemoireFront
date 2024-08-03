// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { EditExpertComponent } from './edit-expert.component';

// describe('EditExpertComponent', () => {
//   let component: EditExpertComponent;
//   let fixture: ComponentFixture<EditExpertComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [EditExpertComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(EditExpertComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditExpertComponent } from './edit-expert.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditExpertComponent', () => {
  let component: EditExpertComponent;
  let fixture: ComponentFixture<EditExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpertComponent ],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
