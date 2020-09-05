import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'fleet-createsingle',
  templateUrl: './create-single-contract-fleet.compnent.html',
  styleUrls: []
})
export class CreateSingleContractFleetComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
