import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneBookService } from '../../../Service/phone-book-service';
import { Directory } from '../../../models/directory';
import { State } from '../../../store/directory.reducer';
import { Store } from '@ngrx/store';
import { GetDirectoryData } from '../../../store/directory.actions';
import { EntryBook } from '../../../models/entry-book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-phonebook-list',
    templateUrl: './phonebook-list.component.html',
    styleUrls: ['./phonebook-list.component.less']
  })

export class PhonebookListComponent implements OnInit {

  currentEntrybook: any;
  directoryData: Directory[];
  dataFromAPI: Directory[];
  filteredDirectory: Directory[];
  filterPhoneBookList: string;
  closeResult: string;
  personName: string;
  errorMsg: string;

  constructor(private store: Store< State>, private atService: PhoneBookService,
              private modalService: NgbModal ) {
      this.atService.getDirectoryResults().subscribe({
        next: response => {this.dataFromAPI = response;
                           this.filteredDirectory = this.dataFromAPI;
      },
        error: err => this.errorMsg = err
      });
  }

  ngOnInit() {
    this.store.dispatch(new GetDirectoryData());
}

openEntriesModal(content, entryBook) {
  this.currentEntrybook = entryBook;
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === 'ESC') {
    return 'by pressing ESC';
  } else if (reason === 'BACKDROP_CLICK') {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

filterPhoneBook(value) {
  this.filterPhoneBookList = value;
  this.filteredDirectory =  this.filterPhoneBookList ? this.performFilter(this.filterPhoneBookList) : this.dataFromAPI;
}

performFilter(filterByValue: string) {
    return this.dataFromAPI.filter(x => x.PhoneBookName.toLowerCase().indexOf(filterByValue.toLowerCase()) !== -1);
}

getPhoneBookName(findByValue: string) {
    return this.filteredDirectory.find(x => x.PhoneBookName.toLowerCase().indexOf(findByValue.toLowerCase()) !== -1).PhoneBookName;
 }

 displayEntries(message: string): void {
  this.personName = message;
 }
}

