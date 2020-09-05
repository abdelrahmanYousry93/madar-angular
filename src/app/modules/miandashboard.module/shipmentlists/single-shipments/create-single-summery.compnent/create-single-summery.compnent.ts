import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'summery-createsingle',
  templateUrl: './create-single-summery.compnent.html',
  styleUrls: []
})
export class CreateSingleShipmentSummeryComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
