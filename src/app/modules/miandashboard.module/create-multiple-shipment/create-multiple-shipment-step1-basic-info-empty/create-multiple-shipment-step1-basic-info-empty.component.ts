import { Component, OnInit } from '@angular/core';

declare var $ ;
declare var Snap  ;

@Component({
  selector: 'app-create-multiple-shipment-step1-basic-info-empty',
  templateUrl: './create-multiple-shipment-step1-basic-info-empty.component.html',
  styles: [
  ]
})
export class CreateMultipleShipmentStep1BasicInfoEmptyComponent implements OnInit {

  constructor() { }


  runStepper(){


    
        var count = $(('#count'));
        $({ Counter: 0 }).animate({ Counter: count.text() }, {
          duration: 5000,
          easing: 'linear',
        step: function () {
          count.text(Math.ceil(this.Counter)+ "%");
          }
        });

        var s = Snap('#animated');
        var progress = s.select('#progress');

        progress.attr({strokeDasharray: '0, 751.2'});
        Snap.animate(0,251.2, function( value ) {
          progress.attr({ 'stroke-dasharray':value+',251.2'});
        }, 5000);

 
      }





  ngOnInit(): void {

    this.runStepper();
  }

}
