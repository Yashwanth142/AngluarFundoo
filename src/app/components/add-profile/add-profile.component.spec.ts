import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileComponent } from './add-profile.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('AddProfileComponent', () => {
  let component: AddProfileComponent;
  let fixture: ComponentFixture<AddProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProfileComponent],
      imports: [HttpClientModule,MatDialogModule,MatFormFieldModule, FormsModule, ReactiveFormsModule,
        MatInputModule,MatCardModule,MatIconModule],
        providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }]
    });
    fixture = TestBed.createComponent(AddProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
