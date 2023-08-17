import { Component, OnInit } from '@angular/core';
import { TarefasService, Tarefa } from '../tarefas.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  tarefas$: Observable<Tarefa[]> = of([]);

  constructor(private tarefasService: TarefasService, private router: Router) {}

  ngOnInit(): void {
    this.tarefas$ = this.tarefasService.getTarefas();
  }

  editarTarefa(id: number): void {
    this.router.navigate(['/editar-tarefa', id]);
  }
  
  excluirTarefa(id: number): void {
    this.tarefasService.deleteTarefa(id).subscribe(() => {
      this.tarefas$ = this.tarefasService.getTarefas();
    });
  }
  
  adicionarTarefa(): void {
    this.router.navigate(['/cadastrar-tarefa']);
  }

  
}
