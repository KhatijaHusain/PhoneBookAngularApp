import { EntryBook } from './entry-book';

export interface Directory {
    phoneBookId: number;
    phoneBookName: string;
    entries: EntryBook[];
}
