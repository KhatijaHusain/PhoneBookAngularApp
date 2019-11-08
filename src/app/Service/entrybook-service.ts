import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DirectoryMapper } from './directory-mapper';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Directory } from '../models/directory';
import { tap, catchError } from 'rxjs/operators';
import { DirectoryList } from '../models/mock-data';
import { EntryBook } from '../models/entry-book';

@Injectable()
export class EntryBookService {
    private directoryPath = 'https://localhost:44341/api/EntryBook';

    constructor(
        private http: HttpClient,
        private readonly benchmarkingResultsMapper: DirectoryMapper
    ) { }


    getEntrybookResults(): Observable< EntryBook[]> {
        return this.http.get< EntryBook[]>(this.directoryPath).pipe(
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
