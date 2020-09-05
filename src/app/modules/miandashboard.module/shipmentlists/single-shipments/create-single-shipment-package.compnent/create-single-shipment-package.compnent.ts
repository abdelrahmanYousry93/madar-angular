import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shipment-create-package',
  templateUrl: './create-single-shipment-package.compnent.html',
  styleUrls: []
})
export class CreateSingleShipmentPackageComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
