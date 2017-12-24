import { Component, OnInit } from '@angular/core';
import { ImageService } from './imageview.service';
import {IAlbum} from '../inter';
@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.css']
})
export class ImageviewComponent implements OnInit {
  x: any;
  ImageViewservice: any;
  start:number;
  limit:number;
  albums:IAlbum[];
  response:IAlbum[];
   constructor(private _imageViewService:ImageService) { 
      this.start=0;
      this.limit=10;
    }
  ngOnInit() {
  }
  display(a)
  {
    this.ImageViewservice.getImages(this.start, a).subscribe(response => {
      this.albums = response;
      console.log(this.albums);
     // this.albums = response;
    });
    //console.log(a);
  }
  displayimage(b)
  {
    this.x = b;
  }

}
