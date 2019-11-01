import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

@Component({
    selector: 'app-entrybook-add-modal',
    templateUrl: './entrybook-add-modal.component.html',
    styleUrls: ['./entrybook-add-modal.component.less']
})
export class EntryBookAddModalComponent {
    closeResult: string;

    constructor(public activeModal: NgbActiveModal) {}

    ClearEntry() {}
}
