import { Component } from '@angular/core';

@Component({
  selector: 'range-image',
  templateUrl: './range-image.component.html',
  styleUrls: ['./range-image.component.scss']
})
export class RangeImageComponent {
  getValueInput(value ){
    document.getElementById('range-line').style.width=value+'%';
    document.getElementById('fill-main').style.width=value+'%';
    if(value >= 26 && value <=76 ) {
      let phoneValue = ((value -26)*2);
      document.getElementById('fill-phone').style.width=phoneValue+'%';
      console.log('value', value);
      console.log('phoneValue', phoneValue);
    }
  }

  }
