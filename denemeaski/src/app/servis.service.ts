import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ServisService {
  navData : any ;
  constructor() { }

  setNavData(navObj){
  this.navData = navObj ;
  }

  getNavData()
  {
   return this.navData;
  }

}
