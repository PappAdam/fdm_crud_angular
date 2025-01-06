import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {FDM} from './model/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  contentsRoute = 'http://localhost:3000/fdm_printers';
  constructor(private http: HttpClient) {}

  async get(id: string = ''): Promise<FDM[] | HttpErrorResponse> {
    const request = this.http.get<FDM[]>(this.contentsRoute + id);

    try {
      const response = await lastValueFrom(request);
      return response;
    } catch (error) {
      console.error(error);
      return error as HttpErrorResponse;
    }
  }

  async create(p: FDM): Promise<FDM | HttpErrorResponse> {
    const body = p;

    const request = this.http.post<FDM>(this.contentsRoute, body);

    try {
      const response = await lastValueFrom(request);
      return response;
    } catch (error) {
      console.error(error);
      return error as HttpErrorResponse;
    }

    
  }

  async edit(p: FDM): Promise<FDM | HttpErrorResponse> {
    const body = p;

    const request = this.http.patch<FDM>(
      this.contentsRoute + `/${(p as any).id}`,
      body
    );

    try {
      const response = await lastValueFrom(request);
      return response;
    } catch (error) {
      console.error(error);
      return error as HttpErrorResponse;
    }
  }

  async delete(p: FDM): Promise<FDM | HttpErrorResponse> {
    const request = this.http.delete<FDM>(
      this.contentsRoute + `/${(p as any).id}`
    );

    try {
      const response = await lastValueFrom(request);
      return response;
    } catch (error) {
      console.error(error);
      return error as HttpErrorResponse;
    }
  }
}