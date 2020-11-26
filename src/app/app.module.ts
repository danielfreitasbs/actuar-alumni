import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoveDialogComponent } from './components/dialogs/remove-dialog/remove-dialog.component';
import { MainComponent } from './components/main/main.component';
import { AlumniCreateComponent } from './pages/alumni/alumni-create/alumni-create.component';
import { AlumniEditComponent } from './pages/alumni/alumni-edit/alumni-edit.component';
import { AlumniListComponent } from './pages/alumni/alumni-list/alumni-list.component';
import { AlumniComponent } from './pages/alumni/alumni.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumniComponent,
    AlumniCreateComponent,
    AlumniListComponent,
    AlumniEditComponent,
    MainComponent,
    RemoveDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
