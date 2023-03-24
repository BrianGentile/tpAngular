import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeShareInfoService {

  constructor() {}

  public stringVar = new Subject<string>();

  setInfo(s:string){
    this.stringVar.next(s);
  }


  getInfo():Subject<string>{
      return this.stringVar;
  
    
  }


}
