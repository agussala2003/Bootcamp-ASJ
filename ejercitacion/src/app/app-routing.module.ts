import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Submain1Component } from './components/main/submain1/submain1.component';
import { Submain2Component } from './components/main/submain2/submain2.component';
import { MainComponent } from './components/main/main.component';

//
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'todolist',
    component: Submain1Component
  },
  {
    path: 'simpsonslist',
    component: Submain2Component
  },
  // {
  //   path: 'products/:id',
  //   component: Submain2Component //Aqui va el componente
  // },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '' //Aqui va el componente
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
