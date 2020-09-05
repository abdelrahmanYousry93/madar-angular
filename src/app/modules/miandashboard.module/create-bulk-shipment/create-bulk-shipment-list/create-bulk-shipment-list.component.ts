import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bulk-shipment-list',
  templateUrl: './create-bulk-shipment-list.component.html',
  styles: [
  ]
})
export class CreateBulkShipmentListComponent implements OnInit {

  constructor() { }
  displayModal: boolean = false;

  showDialog() {
    this.displayModal = true;
  }
  ngOnInit(): void {
  }

}
