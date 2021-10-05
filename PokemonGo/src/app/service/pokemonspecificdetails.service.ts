import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonspecificdetailsService {

  dburl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) { }

  getSpecificPokemonDetails(elementid: string){
    return this.http.get(elementid)
  }
}
