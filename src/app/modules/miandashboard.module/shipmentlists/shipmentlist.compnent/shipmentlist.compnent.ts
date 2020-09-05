import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shipmentlist',
  templateUrl: './shipmentlist.compnent.html',
  styleUrls: []
})
export class ShipmentListComponent  implements OnInit{
    
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;
    displayModal1: boolean = false;

    showDialog() {
      this.displayModal1 = true;
    }
}
