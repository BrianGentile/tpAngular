import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeServiceRes, PokeServiceRes2 } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(public http:HttpClient) { 

  }

  getPokemons(): Observable<PokeServiceRes>{
    return this.http.get<PokeServiceRes>(url + '?limit=1010/');
  }

  getPokemonDetails(id:string):Observable<PokeServiceRes2>{
    var trueIdNumber: number = +id + 1;
    // var trueId: string = String(trueIdNumber)
    return this.http.get<PokeServiceRes2>(url + trueIdNumber.toString() + "/");
  }
}
