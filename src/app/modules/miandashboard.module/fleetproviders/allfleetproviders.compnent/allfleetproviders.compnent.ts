import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'all-fleet',
  templateUrl: './allfleetproviders.compnent.html',
  styleUrls: []
})
export class AllFleetsComponent implements OnInit {
  constructor(private router: Router) {
  }
data:any;
  
  ngOnInit(): void
   {

    this.data = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]    
        };
}
}
