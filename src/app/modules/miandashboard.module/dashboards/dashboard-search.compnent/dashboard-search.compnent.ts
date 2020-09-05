import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'dashboard-search',
  templateUrl: './dashboard-search.compnent.html',
  styleUrls: []
})
export class DashboardSearchComponent  implements OnInit{
  constructor(private router: Router) {
  }
  data:any;
    ngOnInit(): void {
         
    }
    

}
