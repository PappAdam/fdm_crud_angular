import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './jdb.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FDM } from './model/model';
import { FdmEditorComponent } from './fdm-editor/fdm-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FdmEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fdm_crud_angular';
  printers: FDM[] = [];
  modal_active: boolean = false;
  current_printer: FDM | null= null;
  edited = false;

  constructor(protected dataService: DataService) {}

  async ngOnInit() {
    this.refresh();
  }

  async refresh() {
    try {
      const result = await this.dataService.get();
      if (!(result instanceof HttpErrorResponse)) {
        this.printers = result;
      } else {
        console.error('Error fetching printers:', result.message);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  }

  async delete(p: FDM) {
    await this.dataService.delete(p);
    this.refresh();
  }

  async save_modal(p:FDM|null) {
    if (p) {
      if (this.edited) {
        await this.dataService.edit(p);
      }
      else {
        await this.dataService.create(p);
      }

      this.refresh();
    }
 
    this.edited = false;
    this.current_printer = null;
    this.modal_active = false;
  }

  set_edit(p: FDM) {
    this.modal_active = true;
    this.current_printer = p;
    this.edited = true;    
  }

  set_create() {
    this.modal_active = true;
    this.current_printer = null;
  }
}
 