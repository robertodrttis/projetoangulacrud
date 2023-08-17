import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a registration form', () => {
    expect(component.registroForm.contains('nome')).toBeTruthy();
    expect(component.registroForm.contains('email')).toBeTruthy();
    expect(component.registroForm.contains('senha')).toBeTruthy();
  });

  it('should validate form controls', () => {
    const nomeControl = component.registroForm.get('nome');
    const emailControl = component.registroForm.get('email');
    const senhaControl = component.registroForm.get('senha');

    expect(nomeControl?.valid).toBeFalsy();
    expect(emailControl?.valid).toBeFalsy();
    expect(senhaControl?.valid).toBeFalsy();

    nomeControl?.setValue('John');
    emailControl?.setValue('john@example.com');
    senhaControl?.setValue('password123');

    expect(nomeControl?.valid).toBeTruthy();
    expect(emailControl?.valid).toBeTruthy();
    expect(senhaControl?.valid).toBeTruthy();
  });

  it('should print form values on successful submission', () => {
    spyOn(console, 'log');

    component.registroForm.setValue({
      nome: 'John',
      email: 'john@example.com',
      senha: 'password123'
    });

    component.onSubmit();

    expect(console.log).toHaveBeenCalledWith({
      nome: 'John',
      email: 'john@example.com',
      senha: 'password123'
    });
  });
});
