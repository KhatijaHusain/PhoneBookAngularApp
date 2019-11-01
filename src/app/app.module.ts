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
@NgModule({
  declarations: [
    AppComponent,
    PhonebookListComponent,
    PhoneBookAddModalComponent,
    EntryBookAddModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('benchmarkingView', reducer),
    EffectsModule.forRoot([ DirectoryEffects ]),
    HttpClientModule,
  ],
  providers: [PhoneBookService, DirectoryMapper],
  bootstrap: [AppComponent],
  entryComponents: [EntryBookAddModalComponent]
})
export class AppModule { }
