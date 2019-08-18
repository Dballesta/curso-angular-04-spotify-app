import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artists: any[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino) {
    this.spotifyService.getArtista(termino).subscribe((data: any) => {
      console.log(data);
      this.artists = data.artists.items;
    });
  }

}
