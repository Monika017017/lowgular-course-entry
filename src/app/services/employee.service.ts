import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {CreateEmployeeModel} from "../model/create-employee.model";
import {ApiResponse, EmployeeResponse} from "./api.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees',
      ).pipe(
        map((response: ApiResponse<EmployeeResponse[]>) => {
          return [];
    })
    )
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }
  delete(id:string): Observable<any> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/2' + id)
  }

}
