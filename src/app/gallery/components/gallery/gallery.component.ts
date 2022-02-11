import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../../services/gallery.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private filter: any;
  private page: any;
  imageList = new BehaviorSubject(Array(9).fill({}));

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit(): void {
    this.loadImages();
  }

  updateGallery($event: any) {
    this.filter = $event;
    this.loadImages();
  }

  paginationChanged($event: any) {
    this.page = $event;
    this.loadImages();

  }

  private loadImages() {
    this.galleryService.loadImageSet({
      filter: this.filter,
      page: this.page
    }).subscribe((res: any) => {
      console.log(res);
      this.imageList.next(res.hits);
    })
  }
}
