import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  constructor(private http:HttpClient) { }
  private readonly url: string = 'http://localhost:8080/tareas'

  public getTareas():Observable<any> {
    return this.http.get(this.url);
  }

  public getTareaById(id:string):Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  public postTarea(tarea: any):Observable<any> {
    console.log(tarea)
    return this.http.post(this.url,tarea,{ observe: 'response', responseType: 'text' as 'json' });
  }

  public putTarea(id:string,tarea:any):Observable<any> {
    return this.http.put(this.url + '/' + id,tarea);
  }

  public deleteTarea(id:string): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
