import { TestBed } from '@angular/core/testing';
import { TarefasService, Tarefa } from './tarefas.service';

describe('TarefasService', () => {
  let service: TarefasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all tasks', () => {
    service.getTarefas().subscribe(tarefas => {
      expect(tarefas.length).toBe(6);
    });
  });

  it('should get task by ID', () => {
    const expectedTarefa: Tarefa = { id: 1, titulo: 'Estudar Angular', descricao: 'Estudar os fundamentos do Angular.' };
    const result = service.getTarefaById(1);
    expect(result).toEqual(expectedTarefa);
  });

  it('should add a task', () => {
    const novaTarefa: Tarefa = { id: 7, titulo: 'Estudar Java', descricao: 'Estudar os fundamentos do Java.' };
    service.addTarefa(novaTarefa).subscribe(tarefas => {
      expect(tarefas.length).toBe(7);
      expect(tarefas).toContain(novaTarefa);
    });
  });

  it('should edit a task', () => {
    const tarefaEditada: Tarefa = { id: 1, titulo: 'Estudar Angular 2', descricao: 'Estudar os fundamentos do Angular 2.' };
    service.editTarefa(1, tarefaEditada).subscribe(tarefas => {
      expect(tarefas.find(t => t.id === 1)).toEqual(tarefaEditada);
    });
  });

  it('should delete a task', () => {
    service.deleteTarefa(1).subscribe(tarefas => {
      expect(tarefas.length).toBe(5);
      expect(tarefas.find(t => t.id === 1)).toBeUndefined();
    });
  });

});
