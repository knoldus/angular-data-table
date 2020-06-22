import {Pipe, PipeTransform} from '@angular/core';
import {StudentModel} from './models/student.model';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
  transform(students: StudentModel[],
            searchTerm: string): StudentModel[] {
    if (!students || !searchTerm) {
      return students;
    }
    return students.filter(student =>
      student.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
