import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shipmentlistnoresault',
  templateUrl: './shipmentlist-noresault.compnent.html',
  styleUrls: []
})
export class ShipmentListNoResaultComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
