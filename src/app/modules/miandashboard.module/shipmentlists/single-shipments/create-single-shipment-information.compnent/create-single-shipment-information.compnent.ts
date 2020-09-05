import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shipment-createsingleinfo',
  templateUrl: './create-single-shipment-information.compnent.html',
  styleUrls: []
})
export class CreateSingleShipmentInformationComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
