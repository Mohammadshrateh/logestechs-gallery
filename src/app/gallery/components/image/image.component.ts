import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input("data") data:any;
  loading = new BehaviorSubject(true);
  constructor() { }

  ngOnInit(): void {

  }

  imageLoaded($event: any) {
    console.log($event)
    this.loading.next(false);
  }
}
