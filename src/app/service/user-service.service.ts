import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
 
@Injectable()
export class UserService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:9009/getAllRecords';
  }
 
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
 
  public save(user: User) {
    return this.http.post<User>('http://localhost:9009/milk', user);
  }

  public delete(id) {
    return this.http.delete('http://localhost:9009/milk/'+id);
  }

}