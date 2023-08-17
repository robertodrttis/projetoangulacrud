import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './excluir-tarefa/excluir-tarefa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListaTarefasComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    ExcluirTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
