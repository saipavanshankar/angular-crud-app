import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-studentdata',
  imports: [FormsModule, CommonModule],
  templateUrl: './studentdata.html',
  styleUrls: ['./studentdata.css'] // ✅ fixed
})
export class Studentdata implements OnInit {
  name: string = "aashish";
  http = inject(HttpClient);
  studentslist: any[] = [];
  studentObj: any = {
    "studentId": 0,
    "name": "",
    "age": 0,
  }

  ngOnInit(): void {
    this.getallstudents();
  }

  getallstudents() {
    this.http.get("https://localhost:7023/api/students").subscribe((res: any) => {
      this.studentslist = res;
    })
  }

  onSave() {
    this.http.post("https://localhost:7023/api/students", this.studentObj)
      .subscribe((res: any) => {
        this.getallstudents();   // reload fresh list from API
        this.studentObj = { studentId: 0, name: "", age: 0 };  // reset form only
      });
  }

  Ondelete(studentId: number) {
    const isdelete = confirm("Are you sure you want to delete?");
    if (isdelete) {
      this.http.delete("https://localhost:7023/api/students/" + studentId)
        .subscribe({
          next: () => {
            alert('Student deleted successfully');
            this.getallstudents();
          },
          error: (err) => {
            console.error('Delete failed', err);
            alert('Delete failed. Please try again.');
          }
        });
    }
  }



  isEditMode = false; // Add this to your component

  Onedit(student: any) {
    this.studentObj = { ...student }; // clone to avoid direct mutation
    this.isEditMode = true;
  }

  updateStudent() {
    const id = this.studentObj.studentId;
    const updateBody = { ...this.studentObj };
    // Optionally: delete updateBody.studentId;

    this.http.put(`https://localhost:7023/api/students/${id}`, updateBody)
      .subscribe(() => {
        alert('Student updated successfully');
        this.getallstudents();
        this.isEditMode = false;
        this.studentObj = {};
      }, err => {
        alert('Update failed');
      });
  }

  cancelEdit() {
    this.isEditMode = false;
    this.studentObj = {};
  }

  // Add this inside your Studentdata class
  openAddModal() {
    this.isEditMode = false; // switch to Add mode
    this.studentObj = { studentId: 0, name: '', age: 0 }; // reset the form
    const modalEl = document.getElementById('studentModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }

  onclose() {

    this.isEditMode = false;
    this.studentObj = { studentId: 0, name: '', age: 0 };
    window.location.reload(); // 🔄 full reload

  }




}
