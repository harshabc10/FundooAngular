import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/userService/user.service';
import { Observable, of } from 'rxjs';

class MockUserService {
  loginApiCall(email: string, password: string): Observable<any> {
    // Simulate API call response here for testing purposes
    if (email === 'test@test.com' && password === 'test123') {
      return of({ token: 'mockToken', userName: 'Test User', email: 'test@test.com' });
    } else {
      return of({ error: 'Invalid credentials' });
    }
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: MockUserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        FormBuilder,
        { provide: UserService, useClass: MockUserService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle valid login', () => {
    spyOn(userService, 'loginApiCall').and.returnValue(of({ token: 'mockToken', userName: 'Test User', email: 'test@test.com' }));
    component.loginForm.setValue({ email: 'test@test.com', password: 'test123' });
    component.handleLogin();
    expect(localStorage.getItem('authToken')).toEqual('mockToken');
    expect(localStorage.getItem('userName')).toEqual('Test User');
    expect(localStorage.getItem('email')).toEqual('test@test.com');
  });

  // Add more test cases for other scenarios
});
