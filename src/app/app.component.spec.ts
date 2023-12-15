import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import {AppComponent} from "./app.component";
import {TodoComponent} from "./todo/todo.component";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TodoComponent],
      imports: [AppModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'TodoPractice'`, () => {
    expect(component.title).toEqual('TodoPractice');
  });

});
