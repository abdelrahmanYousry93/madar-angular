import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'addfleet-createsingle',
  templateUrl: './create-single-add-fleet-contract.compnent.html',
  styleUrls: []
})
export class CreateSingleAdddContractFleetComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
