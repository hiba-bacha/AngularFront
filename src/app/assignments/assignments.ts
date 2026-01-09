import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail';
import { AddAssignment } from './add-assignment/add-assignment';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    DatePipe,
    NgFor,
    NgIf,
    AssignmentDetailComponent,
    AddAssignment
  ],
  templateUrl: './assignments.html',
  styleUrls: ['./assignments.css']
})
export class Assignments implements OnInit {
  assignmentSelectionne: Assignment | null = null;
  formVisible = false;
  assignments:Assignment[]=[];

  constructor(private assignmentsService: AssignmentsService) {}
  ngOnInit(): void {
  this.getAssignments()}

  getAssignments() {
    return this.assignmentsService.getAssignments().subscribe(assignments => {
      this.assignments = assignments;
  }
  )}

  onDeleteAssignment(assignment: Assignment) {
  this.assignmentsService.deleteAssignment(assignment).subscribe(message => {
    console.log(message);
    this.assignments = this.assignments.filter(a => a !== assignment);
    this.assignmentSelectionne = null;
  });
}


  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignment(event: Assignment) {
    //this.assignments.push(event);
    this.assignmentsService.addAssignment(event).subscribe(message => {
      console.log(message);
    this.formVisible = false;
  }
  )}

}
