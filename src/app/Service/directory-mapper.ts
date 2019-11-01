import { Injectable } from '@angular/core';
import { Directory } from '../models/directory';
import { DirectoryDto } from '../models/directory-dto';


@Injectable()
export class DirectoryMapper {

    mapDirectoryResponse(directoryResult: DirectoryDto): Directory {

        return {
            index : directoryResult.index,
            PhoneBookName: directoryResult.PhoneBookName,
            EntryBook: directoryResult.EntryBook
        };
    }
}
