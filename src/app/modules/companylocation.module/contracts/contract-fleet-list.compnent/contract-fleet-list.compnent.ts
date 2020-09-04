import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contractfleet-list',
  templateUrl: './contract-fleet-list.compnent.html',
  styleUrls: []
})
export class ContractFleetListComponent {
  constructor(private router: Router) {
  }
  displayModal: boolean = false;

  showDialog() {
    this.displayModal = true;
  }
  

}
