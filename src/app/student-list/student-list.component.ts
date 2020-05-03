import { StudentService } from "./../student.service";
import { Student } from "./../student.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"],
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {}
  ngOnInit() {
    this.studentService.getStudent().subscribe((data) => {
      this.students = data.map((e) => {
        return {
          name: e.payload.doc.data(),
          emailID: e.payload.doc.data(),
          ncod: e.payload.doc.data(),
          course: e.payload.doc.data(),
        } as Student;
      });
    });
  }

  create(student: Student) {
    this.studentService.createStudent(student);
  }

  update(student: Student) {
    this.studentService.updateStudent(student);
  }

  delete(id: string) {
    this.studentService.deleteStudent(id);
  }
}
