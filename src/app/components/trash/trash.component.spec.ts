import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashComponent } from './trash.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchPipe } from 'src/app/pipe/search.pipe';


describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashComponent,DisplaynotesComponent,SearchPipe],
      imports: [HttpClientModule,MatDialogModule]
    });
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
