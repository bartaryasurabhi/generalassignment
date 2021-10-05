import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemondetailsService {

  dburl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http:HttpClient) { }

  getPokemons(){
    // return this.http.get<any>(this.dburl).pipe(map(items=>{
    //   console.log(items.results);
    //   return items.results.map((pdetails: any)=>{
    //     console.log(pdetails);
    //     this.http.get(pdetails.url).subscribe(
    //       (data)=>{
    //         console.log(data);
    //         return of (data);
            
    //       },
    //       (err)=>{console.log("error", err)})
    //   });
    // }))

    return this.http.get<any>(this.dburl);
  }
}
