import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  URL_API:any = 'https://reqres.in/api/users';
  datosUsuario: any = {
    name:'',
    job:'',
    id: -1
  }
  public getUsers():Observable<any>{
    console.log('HTTP GET')
    return this.http.get(this.URL_API);
  }
  public createUsers(user:any):Observable<any>{
    console.log('HTTP POST')
    return this.http.post(this.URL_API,user);
  }
  public deleteUser(id:any):Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
  public updateUser(user: any):Observable<any>{
    return this.http.put(`${this.URL_API}/${user.id}`,user)
  }
}
