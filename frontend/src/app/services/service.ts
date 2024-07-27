import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import * as apiConfig from '../../assets/apiConfig.json';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private http: HttpClient) {}

  getGrid(): Observable<string[][]> {
    return this.http.get<string[][]>(apiConfig.generateGrid.url);
  }

  getCode(): Observable<{ code: string }> {
    return this.http.get<{ code: string }>(apiConfig.getCode.url);
  }

  setBias(bias: string): Observable<any> {
    return this.http.post(apiConfig.setBias.url, { bias });
  }

  getGridAndCode(): Observable<{ grid: string[][]; code: string }> {
    return forkJoin([
      this.getGrid(),
      this.getCode()
    ]).pipe(
      map(([grid, code]) => ({ grid, code: code.code }))
    );
  }
}
