import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shipment-createsinglereciver',
  templateUrl: './create-reciver-shipment.compnent.html',
  styleUrls: []
})
export class CreateSingleShipmentReciverComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
