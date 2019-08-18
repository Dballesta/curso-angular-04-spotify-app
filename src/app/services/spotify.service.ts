import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Si no se usa el provided in no se alimentará de forma automágica @Injectable() y se deberá añadir compo provider en app.module.ts
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDexkS39-xCi4vPiomeFrBgtUTS5xJfAhHddKWGYBkiDSw6CD6nAH12fXo_ZEr623vFlC0QExm3_eR3HhCFsYorgEwPWFTAxMu_gyvu1FI12dPvsuhTUp3LfbHD8MqmIUU77sKxqcCy'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDexkS39-xCi4vPiomeFrBgtUTS5xJfAhHddKWGYBkiDSw6CD6nAH12fXo_ZEr623vFlC0QExm3_eR3HhCFsYorgEwPWFTAxMu_gyvu1FI12dPvsuhTUp3LfbHD8MqmIUU77sKxqcCy'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&market=ES&limit=15`, { headers });
  }

//   Ejemplo añadiendo params y observe
//   this.httpClient.get('/url', {
//     params: {
//       appid: 'id1234',
//       cnt: '5'
//     },
//     observe: 'response'
//   })
//   .toPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(console.log);
// }
}
