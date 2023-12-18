import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {
  constructor(private http: HttpClient) { }
  public getDatosAPI () {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1')
  }
  public getDatosAPICharacter (num:number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${num}`)
  }
}
