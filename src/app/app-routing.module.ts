import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path : 'tasks',component:TaskComponent},
  {path : '',redirectTo:'tasks',pathMatch:'full'},
  {path : 'add-task',component : AddTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
