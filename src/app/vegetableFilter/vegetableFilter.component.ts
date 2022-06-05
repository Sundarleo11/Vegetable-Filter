import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vegetable-filter',
  templateUrl: './vegetableFilter.component.html',
  styleUrls: ['./vegetableFilter.component.scss']
})

export class VegetableFilter implements OnInit {
  @Input() vegetables: string[];

  ngOnInit() {
  }
}
