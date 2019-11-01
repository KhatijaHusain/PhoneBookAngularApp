import { Action } from '@ngrx/store';
import { Directory } from '../models/directory';

export const UPDATE_DIRECTORY_RESULTS = '[DIRECTORY Results] Update DIRECTORY Results';
export const DIRECTORY_RESULTS_UPDATED = '[DIRECTORY Results] DIRECTORY Results Updated';
export const EXECUTE_SUCCESS = '[DIRECTORY Results] DIRECTORY result execute success';
export const EXECUTE_FAIL = '[DIRECTORY Results] DIRECTORY result execute failure';
export const GET_DIRECTORY_DATA = '[DIRECTORY Results] Get DIRECTORY data';

export class GetDirectoryData implements Action {
    readonly type = GET_DIRECTORY_DATA;

    constructor() {}
}

export class ExecuteSuccess implements Action {
    readonly type = EXECUTE_SUCCESS;

    constructor(public payload: Directory) { }
}

export class ExecuteFail implements Action {
    readonly type = EXECUTE_FAIL;

    constructor(public payload: any) {}
}


export class UpdateDirectoryResults implements Action {
    readonly type = UPDATE_DIRECTORY_RESULTS;

    constructor(public payload: Directory) { }
}


export class DirectoryResultsUpdated implements Action {
    readonly type = DIRECTORY_RESULTS_UPDATED;
}

export type Actions =
    | UpdateDirectoryResults
    | ExecuteSuccess
    | ExecuteFail
    | DirectoryResultsUpdated
    | GetDirectoryData;
