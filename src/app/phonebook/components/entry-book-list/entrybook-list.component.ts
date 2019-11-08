import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PhoneBookService } from '../../../Service/phone-book-service';
import { Directory } from '../../../models/directory';
import { State } from '../../../store/directory.reducer';
import { Store } from '@ngrx/store';
import { GetDirectoryData } from '../../../store/directory.actions';
import { AppendCodePipe } from '../../../pipes/phone-number-format.pipe';
import { EntryBook } from '../../../models/entry-book';
import { EntryList } from '../../../models/mock-data';
import { EntryBookService } from '../../../Service/entrybook-service';

@Component({
    selector: 'app-entrybook-list',
    templateUrl: './entrybook-list.component.html',
    styleUrls: ['./entrybook-list.component.less']
  })

export class EntrybookListComponent implements OnInit {

  filterEntryBookList: string;
  filteredEntry: EntryBook[];
  displayedColumns: Directory[];
  dataFromAPI: Directory;
  entryBookResponse: EntryBook[];
  errorMsg: string;
  @Output() displayEntries: EventEmitter< string > = new EventEmitter< string >();

  constructor(private store: Store< State>, private atService: EntryBookService ) {
    this.filteredEntry = EntryList;
    this.atService.getEntrybookResults().subscribe(
      {next: response => {this.entryBookResponse = response;
                          this.filteredEntry = this.entryBookResponse;
      },
    error: err => this.errorMsg = err });
  }

  ngOnInit() {
 }

  filterEntryBook(value) {
  this.filteredEntry =  value ? this.performFilter(this.filterEntryBookList) : EntryList;
 }

  performFilter(filterBy: string) {
  return EntryList.filter(x => x.person_name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
 }

 OnPersonClick(name: string) {
   this.displayEntries.emit(name);
 }
}

