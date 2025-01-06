import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdmEditorComponent } from './fdm-editor.component';

describe('FdmEditorComponent', () => {
  let component: FdmEditorComponent;
  let fixture: ComponentFixture<FdmEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FdmEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdmEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
