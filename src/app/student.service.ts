import { Student } from "src/app/student.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private firestore: AngularFirestore) {}

  // method to get retrieve the available from Firestore collection
  getStudent() {
    return this.firestore.collection("student").snapshotChanges();
  }
  // method to persist a student in the firestore database
  createStudent(student: Student) {
    return this.firestore.collection("student").add(student);
  }
  // method to update an student by its student
  updateStudent(student: Student) {
    delete student.name;
    this.firestore.doc("student/" + student.name).update(student);
  }
  // method to delete a student by its student
  deleteStudent(studentId: string) {
    this.firestore.doc(" student / " + studentId).delete();
  }
}
