import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vegetable-filter',
  templateUrl: './vegetableFilter.component.html',
  styleUrls: ['./vegetableFilter.component.scss']
})

export class VegetableFilter implements OnInit {
  @Input() vegetables: string[];

  newVegetables:string[];
  orgVeg:string[];
  valid:boolean=true;

  searchedVeg="";
  onUpdate(event:Event){
    this.searchedVeg=this.searchedVeg.trim();
    this.vegetables=JSON.parse(
      JSON.stringify(
        this.newVegetables.filter((veg)=> 
        veg.toLowerCase().startsWith(this.searchedVeg.toLowerCase().trim())
        )
      )
    );

    this.newVegetables=JSON.parse(JSON.stringify(this.orgVeg));
    this.valid=true;
    if(this.vegetables.length===0){
      this.valid=false;
    }
  }

  ngOnInit() {
    this.vegetables.forEach(veg=>veg=veg.trim());
    this.newVegetables=JSON.parse(JSON.stringify(this.vegetables));
    this.orgVeg=JSON.parse(JSON.stringify(this.vegetables));
  }
}
 