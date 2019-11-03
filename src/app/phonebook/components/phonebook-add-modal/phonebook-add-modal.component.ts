import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { EntryBookAddModalComponent } from '../entrybook-add-modal/entrybook-add-modal.component';

@Component({
    selector: 'app-phonebook-add-modal',
    templateUrl: './phonebook-add-modal.component.html',
    styleUrls: ['./phonebook-add-modal.component.less']
})
export class PhoneBookAddModalComponent {
    closeResult: string;

    constructor(private modalService: NgbModal) {}

    open(content) {
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

      openEntryBookModal() {
        this.modalService.open(EntryBookAddModalComponent);
      }
}
