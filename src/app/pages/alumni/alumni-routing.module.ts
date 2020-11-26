import { AlumniEditComponent } from './alumni-edit/alumni-edit.component';
import { AlumniCreateComponent } from './alumni-create/alumni-create.component';
import { AlumniListComponent } from './alumni-list/alumni-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlumniListComponent
  },
  {
    path: 'alumni-create',
    component: AlumniCreateComponent
  },
  {
    path: 'alumni-edit/:id',
    component: AlumniEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
