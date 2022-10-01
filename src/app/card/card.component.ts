import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  public title:string="";
  public subtitle:string="";
  public ps:number=0;
  public type:string="";
  public energy:string="";
  public image:string="https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/SWSH11/SWSH11_ES_52.png";

  @Input() item:any;

  constructor() { }

  ngOnInit(): void {
  }

}
