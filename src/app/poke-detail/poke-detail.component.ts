import { Component,Input, OnInit, Injectable } from '@angular/core';
import { PokeServiceRes2 } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';


@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
  providers : []
})
export class PokeDetailComponent implements OnInit{

  @Input('detail')
  detail: PokeServiceRes2 | undefined;
  constructor(private PokeShareInfoService: PokeShareInfoService){

  }

  ngOnInit():void{
    var res = this.PokeShareInfoService.getInfo;
  }
}
