import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alumni',
    loadChildren: () => import('../app/pages/alumni/alumni.module').then(m => m.AlumniModule)
  },
  // {
  //   path: 'alumni-edit',
  //   component: AlumniEditComponent
  // },
  // {
  //   path: 'alumni-create',
  //   component: AlumniCreateComponent
  // },
  {
    path: '',
    redirectTo: '/alumni',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
