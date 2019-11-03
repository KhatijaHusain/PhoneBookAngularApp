import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneBookService } from '../../../Service/phone-book-service';
import { Directory } from '../../../models/directory';
import { State } from '../../../store/directory.reducer';
import { Store } from '@ngrx/store';
import { GetDirectoryData } from '../../../store/directory.actions';
import { EntryBook } from '../../../models/entry-book';

@Component({
    selector: 'app-phonebook-list',
    templateUrl: './phonebook-list.component.html',
    styleUrls: ['./phonebook-list.component.less']
  })

export class PhonebookListComponent implements OnInit {

  currentEntrybook: any;
  directoryData: Directory[];
  dataFromAPI: Directory;
  filteredDirectory: Directory[];
  filterPhoneBookList: string;

  constructor(private store: Store< State>, private atService: PhoneBookService ) {
    this.directoryData = this.atService.getColumns();
    this.filteredDirectory = this.directoryData;
  }

  ngOnInit() {
    this.atService.getDirectoryResults().subscribe(x => this.dataFromAPI = x);
    this.store.dispatch(new GetDirectoryData());
}

openEntryList(entryBook: any) {
  this.currentEntrybook = entryBook;
}

filterPhoneBook(value) {
  this.filterPhoneBookList = value;
  this.filteredDirectory =  this.filterPhoneBookList ? this.performFilter(this.filterPhoneBookList) : this.directoryData;
}

performFilter(filterByValue: string) {
    return this.directoryData.filter(x => x.PhoneBookName.indexOf(filterByValue) !== -1);
}

getPhoneBookName(findByValue: string) {
    return this.directoryData.find(x => x.PhoneBookName.indexOf(findByValue) !== -1).PhoneBookName;
 }
}

