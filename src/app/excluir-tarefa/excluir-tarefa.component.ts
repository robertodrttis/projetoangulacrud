import { Component, OnInit, Input } from '@angular/core';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-excluir-tarefa',
  templateUrl: './excluir-tarefa.component.html',
  styleUrls: ['./excluir-tarefa.component.css']
})
export class ExcluirTarefaComponent implements OnInit {

  @Input()
  tarefaId!: number;

  constructor(private tarefasService: TarefasService) { }

  ngOnInit(): void {}

  deleteTarefa(): void {
    this.tarefasService.deleteTarefa(this.tarefaId).subscribe(() => {
    
    });
  }
}
