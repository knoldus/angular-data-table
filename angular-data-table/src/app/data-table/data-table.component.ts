import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableHeaderModel} from '../models/tableHeader.model';
import {StudentModel} from '../models/student.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() tableHeaders: TableHeaderModel[];
  @Input() tableRows: StudentModel[];
  @Input() dataKeys: string[];
  @Output() sortCriteria = new EventEmitter();
  @Input() initialSortCriteria: { property: string, ascending: boolean };
  currentSortCriteria: { property: string, ascending: boolean };

  constructor() {
  }

  ngOnInit() {
    this.currentSortCriteria = this.initialSortCriteria;
    this.sortCriteria.emit(this.currentSortCriteria);
  }

  onHeaderClick(headerSelected: TableHeaderModel) {
    if (headerSelected.propAssociated.toLowerCase() === this.currentSortCriteria.property.toLowerCase()) {
      this.currentSortCriteria = {property: headerSelected.propAssociated, ascending: !this.currentSortCriteria.ascending};
      this.sortCriteria.emit(this.currentSortCriteria);
    } else {
      this.currentSortCriteria = {property: headerSelected.propAssociated, ascending: true};
      this.sortCriteria.emit(this.currentSortCriteria);
    }
  }
}
