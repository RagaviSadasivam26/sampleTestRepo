import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  firestorecollection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore)
  {
    this.firestorecollection = firestore.collection('Task');
  }
  addTask(title: string)
  {
    this.firestorecollection.add({
      title,
      isdone:false
    })
  }

  updatetaskstatus(id:string, status:boolean)
  {
    this.firestorecollection.doc(id).update({isdone:status});
  }

  deletetaskstatus(id:string)
  {
    this.firestorecollection.doc(id).delete();
  }
}
