import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  URL = environment.URL;
  constructor(private http: HttpClient) { }


  getAll(): Observable<Report[]> {
    return this.http.get<Report[]>(this.URL + `/api/report/` );
  }

  new( body: Report ): Observable<string[]> {
    return this.http.post<string[]>(this.URL + `/api/report/`, body);
  }

}
