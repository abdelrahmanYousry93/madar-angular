import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'congrat-createsingle',
  templateUrl: './create-single-congratiolation.compnent.html',
  styleUrls: []
})
export class CreateSingleCongratuolationComponent  implements OnInit
{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
    }
    visibleSidebar2:any;

}
