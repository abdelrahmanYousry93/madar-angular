import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'companylocation-add',
  templateUrl: './addlocation.compnent.html',
  styleUrls: []
})
export class AddCompanyLocationComponent {
  constructor(private router: Router) {
  }
  displayModal: boolean = false;

  showDialog() {
    this.displayModal = true;
  }
  

}
