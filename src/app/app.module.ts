import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookListComponent } from './phonebook/components/phonebook-list/phonebook-list.component';
import { PhoneBookService } from './Service/phone-book-service';
import { DirectoryMapper } from './Service/directory-mapper';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/directory.reducer';
import { DirectoryEffects } from './store/directory.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { PhoneBookAddModalComponent } from './phonebook/components/phonebook-add-modal/phonebook-add-modal.component';
import { EntryBookAddModalComponent } from './phonebook/components/entrybook-add-modal/entrybook-add-modal.component';
import { FormsModule } from '@angular/forms';
import { AppendCodePipe } from './pipes/phone-number-format.pipe';
import { EntrybookListComponent } from './phonebook/components/entry-book-list/entrybook-list.component';
import { EntryBookService } from './Service/entrybook-service';
@NgModule({
  declarations: [
    AppComponent,
    PhonebookListComponent,
    EntrybookListComponent,
    PhoneBookAddModalComponent,
    EntryBookAddModalComponent,
    AppendCodePipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('benchmarkingView', reducer),
    EffectsModule.forRoot([ DirectoryEffects ]),
    HttpClientModule,
  ],
  providers: [PhoneBookService, DirectoryMapper, AppendCodePipe, EntryBookService],
  bootstrap: [AppComponent],
  entryComponents: [EntryBookAddModalComponent]
})
export class AppModule { }
