import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeServiceRes2 } from '../pokemon';
import { PokeAPIService } from '../poke-api.service';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIService]
})
export class MyComponentComponent implements OnInit {
  id: string = "";
  selectedPokemonId:string = "";
  searchPokemonName:string = "";
  pokemons : Pokemon[] = [];
  pokemonDetail: PokeServiceRes2 |undefined;


  constructor(private PokeAPIService: PokeAPIService, private PokeShareInfoService: PokeShareInfoService) {
  }

  ngOnInit(){
    this.PokeAPIService.getPokemons().subscribe((data) => {
      data.results.forEach((e,index) => {
        this.pokemons.push(new Pokemon('' + index,e.name,e.url));
      });
    }
    );
  }

  go(){

    if(this.selectedPokemonId != ''){
      this.PokeAPIService.getPokemonDetails(this.selectedPokemonId).subscribe(data => this.pokemonDetail = data);
      this.PokeShareInfoService.setInfo(this.selectedPokemonId);
    }
  }
}