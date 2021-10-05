import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PokemondetailsService } from '../../service/pokemondetails.service';
import { PokemonspecificdetailsService } from '../../service/pokemonspecificdetails.service';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemoncardComponent implements OnInit {
  sortOptions = [
    {
      id: 'height',
      name: 'Sort By Height'
    },
    {
      id: 'weight',
      name: 'Sort By Weight'
    },
    {
      id: 'name',
      name: 'Sort By Name'
    }
  ];

  sortOptions1 = 'name';
  pokemonData:any;
   // MatPaginator Inputs
  //  length = 100;
  //  pageSize = 20;
  //  pageSizeOptions: number[] = [5, 10, 25, 100];
 
   // MatPaginator Output
   // MatPaginator Output
  // pageEvent!: PageEvent;
 
  //  setPageSizeOptions(setPageSizeOptionsInput: string) {
  //    if (setPageSizeOptionsInput) {
  //      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //    }
  //  }
  constructor(private pkdetails:PokemondetailsService, private pkspecificDetails:PokemonspecificdetailsService) { }

  ngOnInit(): void {
    this.getpokemonedetails();
    
  }

  getSpecificData(){
    this.pokemonData.results.forEach((element:any) => {
      this.pkspecificDetails.getSpecificPokemonDetails(element.url).subscribe(
        (data:any)=>{
          console.log(data);
         let specicifid = this.pokemonData.results.findIndex((ele:any)=>ele.name == data["name"]);
         this.pokemonData.results[specicifid].pkData = data;
        },
        (err)=>{
          console.log("error");
        }
      );

    });
  }
  getpokemonedetails(){
    this.pkdetails.getPokemons().subscribe(
      (data)=>{
        this.pokemonData = data;
        console.log(this.pokemonData);
        this.getSpecificData();
      },
    (error)=>{
      console.log("This is an error", error);
    }
    )
  }

  sortingfunction(){
    if(this.sortOptions1 == "height"){
      this.pokemonData.results.sort((a:any,b:any) => b.pkData.height - a.pkData.height) 
      //data.sort((a, b) => a.city.localeCompare(b.city) || b.price - a.price);
    }
    if(this.sortOptions1 == "name"){
      this.pokemonData.results.sort((a:any,b:any) => a.name.localeCompare(b.name))
    }
    if(this.sortOptions1 == "weight"){
      this.pokemonData.results.sort((a:any,b:any) => b.pkData.weight - a.pkData.weight) 
    }
  }
 
}
