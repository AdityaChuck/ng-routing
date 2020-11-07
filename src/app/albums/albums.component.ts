import { Component, OnInit } from '@angular/core';
import { FetchAlbumsService } from "../fetch-albums.service" 

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public albums = []
  public errorMessage =""

  constructor( private fetchAlbumsService: FetchAlbumsService ) { }

  ngOnInit(): void {
    this.fetchAlbumsService.getAlbums().subscribe(data => {
      this.albums = data
    },
    error => this.errorMessage = error
    )
  }

}
