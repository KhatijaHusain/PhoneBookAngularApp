import { Injectable } from '@angular/core';
import { PhoneBookService } from '../Service/phone-book-service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { GetDirectoryData, GET_DIRECTORY_DATA, ExecuteSuccess, ExecuteFail, UpdateDirectoryResults } from './directory.actions';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class DirectoryEffects {

    constructor(
        private actions$: Actions,
        private phoneBookService: PhoneBookService) {
        }

        @Effect()
        getDirectoryData$: Observable< Action> = this.actions$.pipe(
            ofType< GetDirectoryData>(GET_DIRECTORY_DATA),
            switchMap(payload => this.phoneBookService.getDirectoryResults()),
            map(result => new ExecuteSuccess(result)),
            catchError(error => of(new ExecuteFail(error),
                new UpdateDirectoryResults(
                    {
                       index : 0,
                       EntryBook: [],
                       PhoneBookName: ''
                }) ))
        );
}
