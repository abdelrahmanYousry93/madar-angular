import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'shared-stepper-multi',
  templateUrl: './multi-shared-stepper.compnent.html',
  styleUrls: []
})
export class SharedStepperMultiCompnent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}