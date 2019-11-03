import { DirectoryList } from '../models/mock-data';
import { Directory } from '../models/directory';
import { HttpClient } from '@angular/common/http';
import { DirectoryMapper } from './directory-mapper';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PhoneBookService {
    private directoryPath = 'https://localhost:44341/api/directory';

    constructor(
        private http: HttpClient,
        private readonly benchmarkingResultsMapper: DirectoryMapper
    ) { }


    getDirectoryResults(): Observable< Directory> {
        return this.http.get< Directory>(this.directoryPath).pipe(
        map(result => this.benchmarkingResultsMapper.mapDirectoryResponse(result)));
    }

    getColumns(): Directory[] {
      return DirectoryList; }
}
