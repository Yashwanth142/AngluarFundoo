import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaynotesComponent } from './displaynotes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchPipe } from 'src/app/pipe/search.pipe';

describe('DisplaynotesComponent', () => {
  let component: DisplaynotesComponent;
  let fixture: ComponentFixture<DisplaynotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaynotesComponent,SearchPipe],
      imports: [HttpClientModule,MatDialogModule]
    });
    fixture = TestBed.createComponent(DisplaynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
