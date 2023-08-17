import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListaTarefasComponent } from './lista-tarefas.component';
import { TarefasService, Tarefa } from '../tarefas.service';
import { Router } from '@angular/router';

describe('ListaTarefasComponent', () => {
  let component: ListaTarefasComponent;
  let fixture: ComponentFixture<ListaTarefasComponent>;
  let tarefasServiceMock: any;
  let routerMock: any;

  const mockTarefas: Tarefa[] = [
    { id: 1, titulo: 'Teste 1', descricao: 'Descricao 1' },
    { id: 2, titulo: 'Teste 2', descricao: 'Descricao 2' }
  ];

  beforeEach(async () => {
    tarefasServiceMock = {
      getTarefas: jasmine.createSpy('getTarefas').and.returnValue(of(mockTarefas)),
      deleteTarefa: jasmine.createSpy('deleteTarefa').and.returnValue(of(null))
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      declarations: [ListaTarefasComponent],
      providers: [
        { provide: TarefasService, useValue: tarefasServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to edit tarefa on editarTarefa', () => {
    component.editarTarefa(1);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/editar-tarefa', 1]);
  });

  it('should delete tarefa and refresh list on excluirTarefa', () => {
    component.excluirTarefa(1);
    expect(tarefasServiceMock.deleteTarefa).toHaveBeenCalledWith(1);
    expect(tarefasServiceMock.getTarefas).toHaveBeenCalled();
  });

  it('should navigate to add tarefa on adicionarTarefa', () => {
    component.adicionarTarefa();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/cadastrar-tarefa']);
  });

});
