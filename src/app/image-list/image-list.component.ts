import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {
  images: any[];
  searchQuery: string;
  imagesFound = false;
  searching = false;

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  constructor(private imageService: ImageService) { }
/* Buscar imgenes por cadena de texto */
  searchImages(query: string) {
    this.searching = true;
    if (query) {
      return this.imageService.getImage(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => {(this.searching = false), this.searchQuery = ''; }
      );
    }

  }
/* Buscar imgenes categoria */
  searchImagesCategory(query: string) {
    this.searching = true;
    if (query) {
      return this.imageService.getImageCategory(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => {(this.searching = false), this.searchQuery = ''; }
      );
    }

  }

  ngOnInit() {
  }

}
