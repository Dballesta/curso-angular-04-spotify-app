import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  idArtista: string;
  artista: any = {};
  loading: boolean;
  topTracks: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading=true;

    this.activatedRoute.params.subscribe(
      params => {
        this.idArtista = params['id'];
      }
    );

    this.spotifyService.getArtista(this.idArtista).subscribe((data: any) => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });

    this.spotifyService.getTopTracks(this.idArtista).subscribe((data:any) =>{
      this.topTracks = data;
      console.log(this.topTracks);
    });
  }

  ngOnInit() {
  }

}
