import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PhoneBookService } from '../../../Service/phone-book-service';
import { Directory } from '../../../models/directory';
import { State } from '../../../store/directory.reducer';
import { Store } from '@ngrx/store';
import { GetDirectoryData } from '../../../store/directory.actions';
import { AppendCodePipe } from '../../../pipes/phone-number-format.pipe';
import { EntryBook } from '../../../models/entry-book';
import { EntryList } from '../../../models/mock-data';

@Component({
    selector: 'app-entrybook-list',
    templateUrl: './entrybook-list.component.html',
    styleUrls: ['./entrybook-list.component.less']
  })

export class EntrybookListComponent implements OnInit {

  filterEntryBookList: string;
  filteredEntry: EntryBook[];
  @Input() entryBook: any;
  constructor(private store: Store< State>, private atService: PhoneBookService ) {
    this.filteredEntry = EntryList;
  }
  displayedColumns: Directory[];
  dataFromAPI: Directory;

  ngOnInit() {
    this.displayedColumns = this.atService.getColumns();
}

openEntryList() {
  console.log(this.displayedColumns);
}


filterEntryBook(value) {
  // this.filterEntryBookList = value;
  this.filteredEntry =  value ? this.performFilter(this.filterEntryBookList) : EntryList;
}

performFilter(filterBy: string) {
  return EntryList.filter(x => x.person_name.indexOf(filterBy) !== -1);
}
}

