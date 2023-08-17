import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefasService, Tarefa } from '../tarefas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  tarefaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tarefasService: TarefasService,
    private router: Router
  ) {
    this.tarefaForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.tarefaForm.valid) {
      const novaTarefa: Tarefa = {
        id: Date.now(), 
        ...this.tarefaForm.value
      };
      
      this.tarefasService.addTarefa(novaTarefa).subscribe(() => {
        this.tarefaForm.reset();
        this.router.navigate(['/tarefas']);
      });
    }
  }
}
