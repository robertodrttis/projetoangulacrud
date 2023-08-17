import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  const routerMock = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login form', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('senha')).toBeTruthy();
  });

  it('should validate form controls', () => {
    const emailControl = component.loginForm.get('email');
    const senhaControl = component.loginForm.get('senha');

    expect(emailControl?.valid).toBeFalsy();
    expect(senhaControl?.valid).toBeFalsy();

    emailControl?.setValue('user@example.com');
    senhaControl?.setValue('password123');

    expect(emailControl?.valid).toBeTruthy();
    expect(senhaControl?.valid).toBeTruthy();
  });

  it('should navigate to registration on successful submission', () => {
    component.loginForm.setValue({
      email: 'user@example.com',
      senha: 'password123'
    });

    component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['/registro']);
  });
});
