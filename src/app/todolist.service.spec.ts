import { TestBed } from '@angular/core/testing';
import { TodoService } from './todolist.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


describe('TodoService', () => {
  let service: TodoService;
  let store: jasmine.SpyObj<AngularFirestore>;
  let collection: jasmine.SpyObj<AngularFirestoreCollection>;
  let document: any;

  beforeEach(() => {
    // Create spies for AngularFirestore and AngularFirestoreCollection
    store = jasmine.createSpyObj('AngularFirestore', ['collection']);
    collection = jasmine.createSpyObj('AngularFirestoreCollection', ['add','doc']);
    document = jasmine.createSpyObj('Angularfirestoredocument',['update', 'delete']);

    // Configure the AngularFirestore spy
    store.collection.and.returnValue(collection);
    // store.collection.and.returnValue(document);
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        { provide: AngularFirestore, useValue: store }
      ]
    });

    // Inject the service and spies
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {

    const title = 'Test Task';

    service.addTask(title);

    expect(collection.add).toHaveBeenCalledWith({ title, isdone: false });

  });

  it('should update task status', () => {
    const document = jasmine.createSpyObj('AngularFirestoreDocument', ['update']);
    collection.doc.and.returnValue(document);

    service.updatetaskstatus('test-id', true);

    expect(collection.doc).toHaveBeenCalledWith('test-id');
    expect(document.update).toHaveBeenCalledWith({ isdone: true });
  });

  it('should delete task', () => {

    const document1 = jasmine.createSpyObj('AngularFirestoreDocument', ['delete']);

    collection.doc.and.returnValue(document1);

    service.deletetaskstatus('test-id');

    expect(collection.doc).toHaveBeenCalledWith('test-id');
    expect(document1.delete).toHaveBeenCalled();
  });
});
