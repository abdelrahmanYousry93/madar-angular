import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html'
})
export class AddNewUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout( function(){

      $(".dropify").dropify({messages:{default:"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big (1M max)."}});
    
    
    } ,500 )
  }

}
