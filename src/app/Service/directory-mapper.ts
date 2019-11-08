import { Injectable } from '@angular/core';
import { Directory } from '../models/directory';
import { DirectoryDto } from '../models/directory-dto';


@Injectable()
export class DirectoryMapper {
    private directoryResult1: Directory[];

    mapDirectoryResponse(directoryResult: DirectoryDto[]): Directory[] {
        this.directoryResult1 = directoryResult;
        return this.directoryResult1;
    }

    private mapDirectory(x: DirectoryDto): Directory {
        return {
            phoneBookId: x.phoneBookId,
            entries: x.entries,
            phoneBookName: x.phoneBookName
        };
    }
}
