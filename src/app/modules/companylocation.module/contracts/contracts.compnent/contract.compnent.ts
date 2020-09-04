import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contracts',
  templateUrl: './contract.compnent.html',
  styleUrls: []
})
export class ContractsComponent {
  constructor(private router: Router) {
  }
  displayModal: boolean = false;

  showDialog() {
    this.displayModal = true;
  }
  

}
