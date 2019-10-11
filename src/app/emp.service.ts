import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url: string = 'https://22f41d4d.ngrok.io/api/Settings/GetDesignations';
  delurl: String = 'https://22f41d4d.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';
  editurl: string = 'https://22f41d4d.ngrok.io/api/Settings/InsUpdateDesignation';
  constructor(private _http: HttpClient) { }

  getAllEmployee() {
    return this._http.get(this.url);
  }
  delEmployee(id) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.delurl + id , { headers: head });
  }
  editemployee(item) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.editurl , body, {headers: head});
  }
  addemployee(item) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.editurl , body, {headers: head});
    }
}
