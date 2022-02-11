import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit {
  @Output("onFilterChange") filterChangeEvent = new EventEmitter<any>();
  options = [
    {value: '', viewValue: 'All Categories'},
    {value: 'backgrounds', viewValue: 'Backgrounds'},
    {value: 'nature', viewValue: 'Nature'},
    {value: 'education', viewValue: 'Education'},
    {value: 'animals', viewValue: 'Animals'},
    {value: 'computer', viewValue: 'Computer'},

  ]
  search = '';
  category = '';
  private oldTerm = '';
  updateSearchTerm(){
    //todo add some code
    if(this.oldTerm == this.search)
      return;
    this.oldTerm = this.search;
    this.updateFilter();
  }
  ngOnInit(): void {
  }
  updateFilter(){
    this.filterChangeEvent.emit({
      category: this.category,
      search: this.search,
    })
  }

}
