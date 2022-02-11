import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }


  loadImageSet(filter: any){
    const path = "https://pixabay.com/api/?key=25617521-d75916be8764af478c506a206";
    let params = new HttpParams().set("per_page", "9")
    if(filter && filter.filter){
      if(filter.filter.search){
        params = params.set("q",filter.filter.search)
      }
      if(filter.filter.category){
        params = params.set("q",filter.filter.category)
      }
    }
    if(filter.page){
      params = params.set("page",filter.page)
    }
    return this.httpClient.get(path,{params})
  }


}
