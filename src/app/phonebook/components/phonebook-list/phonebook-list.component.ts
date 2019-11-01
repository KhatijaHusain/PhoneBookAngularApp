import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PhoneBookService } from '../../../Service/phone-book-service';
import { Directory } from '../../../models/directory';
import { State } from '../../../store/directory.reducer';
import { Store } from '@ngrx/store';
import { GetDirectoryData } from '../../../store/directory.actions';

@Component({
    selector: 'app-phonebook-list',
    templateUrl: './phonebook-list.component.html',
    styleUrls: ['./phonebook-list.component.less']
  })

export class PhonebookListComponent implements OnInit {
  @Output() tableclick = new EventEmitter();

  constructor(private store: Store< State>, private atService: PhoneBookService ) {}
  displayedColumns: Directory[];
  dataFromAPI: Directory;

  ngOnInit() {
    this.displayedColumns = this.atService.getColumns();
    this.atService.getDirectoryResults().subscribe(x => this.dataFromAPI = x);
    console.log('data APi');
    console.log(this.dataFromAPI);
    console.log('before action dispatched');
    this.store.dispatch(new GetDirectoryData());
    console.log('after action dispatched');
    console.log(this.displayedColumns);
}
}

