import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'contract-bulkuploadstep2',
  templateUrl: './contract-bulkuploadstep2.compnent.html',
  styleUrls: []
})
export class ContractBulkUploadStep2Component  implements OnInit{
  constructor(private router: Router) {
  }
  displayModal: boolean = false;
  tranker:any []=[{name: 'Tanker', code: 'tr'},{name: 'Tanker 1', code: 'tr1'},{name: 'Tanker 2', code: 'tr2'}]
  selecttrunk:any;
  ngOnInit(): void {
    setTimeout( function(){

      $(".dropify").dropify({messages:{default:"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big (1M max)."}});
    
    
    } ,500 )  }
  showDialog() {
    this.displayModal = true;
  }
  

}
