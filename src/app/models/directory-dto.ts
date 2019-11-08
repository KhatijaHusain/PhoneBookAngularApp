import { EntryBook } from './entry-book';

export interface DirectoryDto {
    phoneBookId: number;
    phoneBookName: string;
    entries: EntryBook[];
}
