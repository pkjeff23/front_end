import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ImageService {
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&lang=es&q=';
  private perPage = '&per_page=40';
  private minHeight = '&min_height=200';
  private URLCATEGORY: string = this.API_URL + this.API_KEY + '&category=';
  private URL_NEW: string = this.API_URL + this.API_KEY + '&q=landscape';

  constructor(private http: HttpClient) { }

  getImage(query: string) {
    return this.http.get(this.URL + query + this.perPage + this.minHeight);
  }

  getImageCategory(query: string) {
    return this.http.get(this.URLCATEGORY + query + this.perPage + this.minHeight);
  }

  getUser() {
    return this.http.get(this.URL_NEW + this.perPage + this.minHeight);
  }
}
