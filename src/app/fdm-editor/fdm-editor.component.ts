import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FDM } from '../model/model';

@Component({
  selector: 'app-fdm-editor',
  templateUrl: './fdm-editor.component.html',
  styleUrls: ['./fdm-editor.component.css']
})
export class FdmEditorComponent {
  @Input() fdmData: FDM | null = null;
  @Output() closeModal = new EventEmitter<FDM | null>()
  
  save() {
    let printer = new FDM();
    if (this.fdmData) {
      printer.id = this.fdmData.id;
    }
    const formValues = new FormData(document.querySelector("form") as HTMLFormElement);
    printer.model = formValues.get('model') as string;
    printer.brand = formValues.get('brand') as string;
    printer.price = Number(formValues.get('price'));
    printer.notable_features = (formValues.get('notable_features') as string).split(',');

    this.closeModal.emit(printer); 
  }

  cancel() {
    this.closeModal.emit(null);
  }
}
