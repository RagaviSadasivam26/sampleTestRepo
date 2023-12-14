import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { TodoService } from '../todolist.service';


describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoServiceSpy: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    todoServiceSpy = jasmine.createSpyObj('TodoService',
      ['addTask', 'updatetaskstatus', 'deletetaskstatus', 'firestorecollection']);
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      providers: [{ provide: TodoService, useValue: todoServiceSpy }],
    });
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addTask', () => {
    const titleInput = 'Test';
    const inputElement = { value: titleInput } as HTMLInputElement;

    component.onclick(inputElement);

    expect(todoServiceSpy.addTask).toHaveBeenCalledWith(titleInput);
    expect(inputElement.value).toEqual('');
  });


  it('should not call addTask', () => {
    const titleInput = '';
    const inputElement = { value: titleInput } as HTMLInputElement;

    component.onclick(inputElement);

    expect(todoServiceSpy.addTask).not.toHaveBeenCalled();
    expect(inputElement.value).toEqual('');
  });

  it('should update', () => {
    const id = 'test-id';
    const status = true;

    component.onselect(id, status);

    expect(todoServiceSpy.updatetaskstatus).toHaveBeenCalledWith(id, status);
  });

  it('should delete', () => {
    const id = 'test-id';

    component.ondelete(id);

    expect(todoServiceSpy.deletetaskstatus).toHaveBeenCalledWith(id);
  });


});



