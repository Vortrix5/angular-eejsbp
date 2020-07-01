import { Component } from '@angular/core';
import { dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  public items: any[] = [
    {
      color: 'green',
    },
     {
      color: 'blue',
    }, 
    {
      color: 'grey',
    }, 
    {
      color: 'red',
    },
    {
      color: 'black',
    },
  ];
   constructor(private dragulaService: DragulaService)
  {
    dragulaService.setOptions('bag-one', {
      revertOnSpill: true
    });
    
  }
}
