import { Component } from '@angular/core';

interface Card{
  title:string;
  subtitle:string;
  ps:number;
  type:string;
  energy:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'Pokemon Trading Card    ';

  public CardItems: Card[]=[];

  ngOnInit(): void {
    this.CardItems = [
      {title:'Pikachu', subtitle:'Pika pika', ps:60 , type:'Electric', energy:'Electricity',image:"https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/SWSH11/SWSH11_ES_52.png"},
      {title:'Bulbasaur', subtitle:'Bulbasaur', ps:60 , type:'Electric', energy:'Electricity',image:"https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/SWSHP/SWSHP_ES_SWSH231.png"},
      {title:'Charmander', subtitle:'Charmander', ps:60 , type:'Fire', energy:'Fire',image:"https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/SMA/SMA_ES_SV6.png"},
      {title:'Rowlet', subtitle:'Rowlet', ps:60 , type:'Plant', energy:'Plant',image:"https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/SMP/SMP_ES_SM22.png"},
      {title:'Evee', subtitle:'Evee', ps:60 , type:'Colorless', energy:'Colorless',image:"https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/BWP/BWP_ES_BW94.png"},
      {title:'Scorbunny', subtitle:'Scorbunny', ps:60 , type:'Electric', energy:'Electricity',image:"https://assets.pokemon.com/assets/cms2-es-es/img/cards/web/SWSHP/SWSHP_ES_SWSH002.png"}
    ];    
  }
  
}
