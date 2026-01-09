import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './add-assignment.html',
  styleUrls: ['./add-assignment.css']
})
export class AddAssignment {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  nomAssignment: string = '';
  dateDeRendu!: Date;

  onAjouterAssignment(): void {
    const nouvelAssignment: Assignment = {
      nom: this.nomAssignment,
      dateDeRendu: this.dateDeRendu,
      rendu: false
    };

    this.nouvelAssignment.emit(nouvelAssignment);
  }
}
