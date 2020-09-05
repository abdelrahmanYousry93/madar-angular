import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shipment-createsingle',
  templateUrl: './create-single-shipment.compnent.html',
  styleUrls: []
})
export class CreateSingleShipmentComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
