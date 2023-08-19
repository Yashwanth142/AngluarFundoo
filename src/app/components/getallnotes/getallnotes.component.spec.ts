import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallnotesComponent } from './getallnotes.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatenoteComponent } from '../createnote/createnote.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';


describe('GetallnotesComponent', () => {
  let component: GetallnotesComponent;
  let fixture: ComponentFixture<GetallnotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallnotesComponent,CreatenoteComponent,DisplaynotesComponent,SearchPipe],
      imports: [HttpClientModule,MatSnackBarModule,MatDialogModule,
        MatFormFieldModule, FormsModule, ReactiveFormsModule,
        MatInputModule,BrowserAnimationsModule],
        providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }]
    });
    fixture = TestBed.createComponent(GetallnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
