import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {NameFilterPipe} from './name-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchBar = new FormControl('');
  nameFilterPipe = new NameFilterPipe();
  initialTableSortCriteria = {property: 'percentage', ascending: false};
  tableHeaders = [
    {title: 'Name', sortable: false, propAssociated: 'name'},
    {title: 'Physics', sortable: true, propAssociated: 'physicsMarks'},
    {title: 'Chemistry', sortable: true, propAssociated: 'chemMarks'},
    {title: 'Mathematics', sortable: true, propAssociated: 'mathsMarks'},
    {title: 'Percentage', sortable: true, propAssociated: 'percentage'}
  ];

  data = [
    {name: 'umang', id: 1, physicsMarks: 98, chemMarks: 89, mathsMarks: 90, percentage: 92},
    {name: 'mansi', id: 2, physicsMarks: 78, chemMarks: 90, mathsMarks: 70, percentage: 76},
    {name: 'abhinav', id: 3, physicsMarks: 48, chemMarks: 99, mathsMarks: 80, percentage: 73},
    {name: 'sparsh', id: 4, physicsMarks: 88, chemMarks: 69, mathsMarks: 90, percentage: 90},
    {name: 'kartik', id: 5, physicsMarks: 80, chemMarks: 49, mathsMarks: 99, percentage: 74},
    {name: 'upanshu', id: 6, physicsMarks: 58, chemMarks: 80, mathsMarks: 30, percentage: 65},
    {name: 'manas', id: 7, physicsMarks: 60, chemMarks: 88, mathsMarks: 60, percentage: 66},
    {name: 'krishna', id: 8, physicsMarks: 88, chemMarks: 39, mathsMarks: 40, percentage: 70},
  ];

  filteredData = this.data;

  filterStudents() {
    this.filteredData = this.nameFilterPipe.transform(this.data, this.searchBar.value);
  }

  sortTable(event) {
    if (event.ascending === true) {
      this.data = this.data.sort((a, b) => (a[event.property] > b[event.property]) ? 1 : -1);
    } else {
      this.data = this.data.sort((a, b) => (a[event.property] < b[event.property]) ? 1 : -1);
    }
  }
}
