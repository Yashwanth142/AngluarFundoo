import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteiconComponent } from './noteicon.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

describe('NoteiconComponent', () => {
  let component: NoteiconComponent;
  let fixture: ComponentFixture<NoteiconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteiconComponent],
      imports: [HttpClientModule,MatMenuModule]
    });
    fixture = TestBed.createComponent(NoteiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
