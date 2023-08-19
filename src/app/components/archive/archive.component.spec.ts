import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveComponent } from './archive.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchPipe } from 'src/app/pipe/search.pipe';


describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveComponent,DisplaynotesComponent,SearchPipe],
      imports: [HttpClientModule,MatDialogModule]
    });
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
