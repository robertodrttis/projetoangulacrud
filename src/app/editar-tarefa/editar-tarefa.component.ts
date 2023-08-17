import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefasService, Tarefa } from '../tarefas.service';


@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  tarefaForm: FormGroup;
  tarefaId!: number;

  constructor(
    private fb: FormBuilder,
    private tarefasService: TarefasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tarefaForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
        this.tarefaId = +id;
        const tarefa = this.tarefasService.getTarefaById(this.tarefaId);
        
        if (tarefa) {
            this.tarefaForm.patchValue(tarefa);
        } else {
            console.error(`Tarefa com ID ${this.tarefaId} não encontrada.`);
        }
    } else {
        console.error('ID da tarefa não fornecido na URL.');
    }
}


  onSubmit(): void {
    if (this.tarefaForm.valid) {
      const updatedTarefa: Tarefa = {
        id: this.tarefaId,
        ...this.tarefaForm.value
      };
      
      this.tarefasService.editTarefa(this.tarefaId, updatedTarefa).subscribe(() => {
        this.router.navigate(['/tarefas']);
      });
    }
  }
}
