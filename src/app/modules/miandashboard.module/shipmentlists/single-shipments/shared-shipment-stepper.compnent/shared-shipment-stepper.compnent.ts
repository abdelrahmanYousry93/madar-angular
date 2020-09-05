import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shared-stepper',
  templateUrl: './shared-shipment-stepper.compnent.html',
  styleUrls: []
})
export class SharedStepperCompnent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}