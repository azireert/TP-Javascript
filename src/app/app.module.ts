import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheComponent } from './Views/tache/tache.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {MatButtonModule, MatFormFieldModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {ContactService} from './shared/services/contact.service';
import { ContactComponent } from './Views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TacheComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
