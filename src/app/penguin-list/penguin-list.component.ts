import { Component, OnInit } from '@angular/core';
import { PENGUINS } from '../model/penguins';

@Component({
  selector: 'app-penguin-list',
  templateUrl: './penguin-list.component.html',
  styleUrls: ['./penguin-list.component.scss']
})
export class PenguinListComponent  implements OnInit {

  penguins = PENGUINS;

  constructor(
    ) {
     console.log('constructor');
    }
  
    ngOnInit() {
      console.log('ngOnInit');
    }
}
