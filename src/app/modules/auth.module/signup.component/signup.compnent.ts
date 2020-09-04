import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $ ;
@Component({
  selector: 'auth-signup',
  templateUrl: './signup.compnent.html',
  styleUrls: []
})
export class SignupComponent implements OnInit {
  value1:string="";
  constructor(private router: Router) {
    this.countries = [
      {name: '+966', code: 'AU'},
      {name: '966', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
  ];
  }
  ngOnInit(): void {
    setTimeout( function(){

      $(".dropify").dropify({messages:{default:"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big (1M max)."}});
    
    
    } ,500 )  }
  selectedCountry={name: '+966', code: 'AU'};

  countries: any[];
  

}
