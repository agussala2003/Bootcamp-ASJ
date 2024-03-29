import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Submain1Component } from './components/main/submain1/submain1.component';
import { Submain2Component } from './components/main/submain2/submain2.component';
import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/main/rickmorty/table/table.component';
import { DetailComponent } from './components/main/rickmorty/table/detail/detail.component';
import { PipeComponent } from './components/main/pipe/pipe.component';
import { FormComponent } from './components/main/submain1/form/form.component';

//
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'to-do-list',
    children: [
      {
        path: '',
        component: Submain1Component
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'form/:idTarea',
        component: FormComponent
      }
    ]
  },
  {
    path: 'simpsons-list',
    component: Submain2Component
  },
  {
    path:'rick-morty',
    children: [
      {
        path:'character-table',
        component: TableComponent
      },
      {
        path:'character-detail/:idCharacter',
        component: DetailComponent
      }
    ]
  },
  {
    path: 'pipe',
    component:PipeComponent
  },
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
