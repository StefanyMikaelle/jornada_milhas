import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // openDialog() {
  //   this.dialog.open(ModalComponent, {
  //     width: '50%'
  //   })
  // }
}
