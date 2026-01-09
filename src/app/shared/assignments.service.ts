import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private assignments: Assignment[] = [
    { nom: "Devoir Angular à rendre", dateDeRendu: new Date('2022-10-10'), rendu: false },
    { nom: "Devoir JAVA à rendre", dateDeRendu: new Date('2022-09-10'), rendu: true }
  ];
  constructor( private loggginService: LoggingService) {}

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggginService.log(assignment.nom, 'ajouté');
    return of("Assignment ajouté !");
  }
  deleteAssignment(assignment: Assignment): Observable<string> {
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos, 1);
    return of("Assignment supprimé !");
  }


  updateAssignment(assignment: Assignment): Observable<string> {
    // Si l'objet a été modifié dans le composant, il est déjà mis à jour ici
    return of("Assignment modifié !");
  }
}
