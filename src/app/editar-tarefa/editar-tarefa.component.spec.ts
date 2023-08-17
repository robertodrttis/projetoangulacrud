import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditarTarefaComponent } from './editar-tarefa.component';
import { TarefasService } from '../tarefas.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;
  let tarefasServiceMock: any;
  let routerMock: any;
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get')
      }
    }
  };

  beforeEach(async () => {
    tarefasServiceMock = {
      getTarefaById: jasmine.createSpy('getTarefaById').and.returnValue({ id: 1, titulo: 'Test', descricao: 'Desc' }),
      editTarefa: jasmine.createSpy('editTarefa').and.returnValue(of(null))
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [EditarTarefaComponent],
      providers: [
        { provide: TarefasService, useValue: tarefasServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the tarefa by its ID on initialization', () => {
    expect(tarefasServiceMock.getTarefaById).toHaveBeenCalled();
  });

  it('should call the editTarefa method of TarefasService and navigate to lista-tarefas when form is valid', () => {
    component.tarefaForm.setValue({
      titulo: 'Test',
      descricao: 'Desc'
    });
    component.onSubmit();

    expect(tarefasServiceMock.editTarefa).toHaveBeenCalled();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/lista-tarefas']);
  });

});
