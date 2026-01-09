import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { AssignmentsService } from '../../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatButtonModule, DatePipe],
  templateUrl: './assignment-detail.html',
  styleUrls: ['./assignment-detail.css']
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis: Assignment | null = null;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentsService: AssignmentsService) { }

  toggleRendu(): void {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = !this.assignmentTransmis.rendu;
      this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(msg => {
        console.log(msg);
      });
    }
  }


  onDelete(): void {
    if (this.assignmentTransmis) {
      this.deleteAssignment.emit(this.assignmentTransmis);
    }
  }
}
