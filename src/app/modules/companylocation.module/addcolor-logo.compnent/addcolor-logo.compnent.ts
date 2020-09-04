import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'companylocation-color',
  templateUrl: './addcolor-logo.compnent.html',
  styleUrls: []
})
export class ColorLogoCompanyLocationComponent  implements OnInit{
  constructor(private router: Router) {
  }
    ngOnInit(): void {
        setTimeout( function(){

            $(".dropify").dropify({messages:{default:"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big (1M max)."}});
          
          
          } ,500 ) 
    }


}
