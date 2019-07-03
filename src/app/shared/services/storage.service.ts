import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  create(key: string, value: any) {
    const valueAsJson = JSON.stringify(value);
    if(!localStorage.getItem(key))
      localStorage.setItem(key, valueAsJson);
  }

  read(key: string){
    const value = localStorage.getItem(key);
    try{
      return JSON.parse(value);
    }catch(e){
      return value;
    }
  }

  delete(key: string){
    localStorage.removeItem(key);
  }

  update(key: string, value: any){
    const valueAsJson = JSON.stringify(value);
    if(localStorage.getItem(key))
      localStorage.setItem(key, valueAsJson);
  }

  clear(){
    localStorage.clear();
  }

  constructor() { }
}
