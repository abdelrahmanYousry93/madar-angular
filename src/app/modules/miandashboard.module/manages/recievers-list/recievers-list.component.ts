import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recievers-list',
  templateUrl: './recievers-list.component.html'
})
export class RecieversListComponent implements OnInit {

  constructor(private router: Router) {
  }
    displayModal: boolean = false;

    showDialog() {
      this.displayModal = true;
    }

    ngOnInit(): void {
    }

}
