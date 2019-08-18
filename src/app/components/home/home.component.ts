import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // PETICIÓN SIMPLE HTTP GET
  // paises: any[];

  // constructor(private http: HttpClient) {
  //   //En algún momento se escuchará esta peticíón
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(
  //     (respuesta: any[]) => {
  //       this.paises = respuesta;
  //       console.log(respuesta);
  //     }
  //   );
  // }
  newRealeases: any[];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.newRealeases = data.albums.items;
    });
  }

  ngOnInit() {
  }

}
