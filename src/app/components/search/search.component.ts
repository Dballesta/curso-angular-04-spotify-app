import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  artists: any[];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino) {
    this.loading = true;
    this.spotifyService.getArtistas(termino).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }

}
