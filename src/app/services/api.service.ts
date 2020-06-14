import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  // base_path = "http://192.168.0.14:80/";

  constructor(private http: HttpClient) {}

  request(route: string) {
    console.log("Calling server");
    this.http.get(route).subscribe();
  }
}
