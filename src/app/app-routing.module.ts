import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcluirTarefaComponent } from './excluir-tarefa/excluir-tarefa.component';


const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'tarefas', component: ListaTarefasComponent },
  { path: 'cadastrar-tarefa', component: CadastrarTarefaComponent },
  { path: 'editar-tarefa/:id', component: EditarTarefaComponent },
  { path: 'excluir', component: ExcluirTarefaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
