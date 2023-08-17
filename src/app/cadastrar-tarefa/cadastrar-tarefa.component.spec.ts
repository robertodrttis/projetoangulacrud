import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar-tarefa.component';
import { TarefasService } from '../tarefas.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


describe('CadastrarTarefaComponent', () => {
  let component: CadastrarTarefaComponent;
  let fixture: ComponentFixture<CadastrarTarefaComponent>;
  let tarefasServiceMock: any;

  beforeEach(async () => {
    tarefasServiceMock = {
      addTarefa: jasmine.createSpy('addTarefa').and.returnValue(of(null))
    };

    await TestBed.configureTestingModule({
      declarations: [ CadastrarTarefaComponent ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the addTarefa method of TarefasService when form is valid', () => {
    component.tarefaForm.setValue({
      titulo: 'Teste',
      descricao: 'Descrição teste'
    });
    component.onSubmit();

    expect(tarefasServiceMock.addTarefa).toHaveBeenCalled();
  });

  it('should reset the form after adding a task successfully', () => {
    component.tarefaForm.setValue({
      titulo: 'Teste',
      descricao: 'Descrição teste'
    });
    component.onSubmit();

    expect(component.tarefaForm.value).toEqual({ titulo: '', descricao: '' });
  });

});
