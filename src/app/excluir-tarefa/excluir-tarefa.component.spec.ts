import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirTarefaComponent } from './excluir-tarefa.component';

describe('ExcluirTarefaComponent', () => {
  let component: ExcluirTarefaComponent;
  let fixture: ComponentFixture<ExcluirTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirTarefaComponent]
    });
    fixture = TestBed.createComponent(ExcluirTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
