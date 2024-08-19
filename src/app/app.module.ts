import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmationService} from 'primeng/api';
import {CalendarModule} from "primeng/calendar";
import {AppComponent} from "./app.component";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputTextareaModule,
    CalendarModule,
    ButtonModule,
    RippleModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
