import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contract-list',
  templateUrl: './contract-list.compnent.html',
  styleUrls: []
})
export class ContractListComponent {
  constructor(private router: Router) {
  }
  displayModal: boolean = false;

  showDialog() {
    this.displayModal = true;
  }
  

}
