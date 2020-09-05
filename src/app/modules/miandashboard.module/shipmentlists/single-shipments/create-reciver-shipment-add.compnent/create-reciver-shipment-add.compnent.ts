import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shipment-createsingleaddreciver',
  templateUrl: './create-reciver-shipment-add.compnent.html',
  styleUrls: []
})
export class CreateSingleShipmenAddReciverComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
