import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dispositivo } from '../model/dispositivo';
import {Observable} from 'rxjs';

const baseUrl='http://localhost:8080/api/v1/Dispositivos';
const base2Url ='http://localhost:8080/api/v1/Dispositivossave';
@Injectable({
  providedIn: 'root'
})

export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }
 
  getAll(): Observable<dispositivo[]> {
    return this.httpClient.get<dispositivo[]>(baseUrl);
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(base2Url, data);
  }
  update(id: string, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, data);
  }
}
