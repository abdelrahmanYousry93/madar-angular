import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
declare var $;
@Component({
  selector: 'fleetprovider-contract',
  templateUrl: './fleetproviders-contract.compnent.html',
  styleUrls: []
})
export class FleetProvidersContractComponent  implements OnInit{
  constructor(private router: Router) {
  }
  data:any;
  tranker:any []=[{name: 'Tanker', code: 'tr'},{name: 'Tanker 1', code: 'tr1'},{name: 'Tanker 2', code: 'tr2'}]
  selecttrunk:any;
  ngOnInit(): void
   {
    setTimeout( function(){

        $(".dropify").dropify({messages:{default:"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big (1M max)."}});
      
      
      } ,500 )  
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
