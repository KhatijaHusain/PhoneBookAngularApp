import { DirectoryList } from '../models/mock-data';
import { Directory } from '../models/directory';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DirectoryMapper } from './directory-mapper';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class PhoneBookService {
     private directoryPath = 'https://localhost:44341/api/directory';

    constructor(
        private http: HttpClient,
        private readonly benchmarkingResultsMapper: DirectoryMapper
    ) { }


    getDirectoryResults(): Observable< Directory[]> {
        return this.http.get< Directory[]>(this.directoryPath).pipe(
        tap(result => console.log('All' + JSON.stringify(result))),
        catchError(this.handleError));
    }

     private handleError(error: HttpErrorResponse) {
         let errormsg = '';
         if (error.error instanceof ErrorEvent) {
             errormsg = `An error occured: ${error.error.message}`;
         } else {
             errormsg = `Server returned ${error.error.message} and status ${error.status}`;
         }
         return throwError(errormsg);
    }
}
