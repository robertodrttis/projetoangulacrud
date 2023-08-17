import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar Angular', descricao: 'Estudar os fundamentos do Angular.' },
    { id: 2, titulo: 'Estudar Reactjs', descricao: 'Estudar os fundamentos do Reactjs.' },
    { id: 3, titulo: 'Estudar Assembly', descricao: 'Estudar os fundamentos do Assembly.' },
    { id: 4, titulo: 'Estudar Python', descricao: 'Estudar os fundamentos do Python.' },
    { id: 5, titulo: 'Estudar NodeJs', descricao: 'Estudar os fundamentos do NodeJs.' },
    { id: 6, titulo: 'Estudar SQL', descricao: 'Estudar os fundamentos do SQL.' },
  ];

  getTarefas(): Observable<Tarefa[]> {
    return of(this.tarefas);
  }

  getTarefaById(id: number): Tarefa | null {
    const tarefa = this.tarefas.find(t => t.id === id);
    return tarefa || null;
  }
  
 
  addTarefa(tarefa: Tarefa): Observable<Tarefa[]> {
    this.tarefas.push(tarefa);
    return of(this.tarefas);
  }

  editTarefa(id: number, tarefa: Tarefa): Observable<Tarefa[]> {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index > -1) {
      this.tarefas[index] = tarefa;
    }
    return of(this.tarefas);
  }
  
  deleteTarefa(id: number): Observable<Tarefa[]> {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    return of(this.tarefas);
  }
}