import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


// Si no se usa el provided in no se alimentará de forma automágica @Injectable() y se deberá añadir compo provider en app.module.ts
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // tslint:disable-next-line: max-line-length
  spotyauth: string = 'Bearer BQBKyC9fDYDgazQ95S5YkaZfiIze562GsSwT1LAP5xG6HsE0baBtYm450q7lshd-nLC7o4eFme6pNGAts1z9A-EJsMpps66BS6k7ASta9TD9OtzJ3yoRcsURdvRzOZhtzpfdAaM8k8gP';


  constructor(private http: HttpClient) {
  }


  //Sin map
  // getNewReleases() {


  //   const headers = new HttpHeaders({
  //     'Authorization': this.spotyauth
  //   });

  //   return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  // }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const token = 'BQDlMZ-Db_YRzwwzSsYk_oCBY6rCbPtcanN-mnReaK3A0goBT1lqGmYwuP6jiszDL3fJ7IbaqgsrWngPWTQQJhQ2vS5E1rlU_ZXt5GQCkTF6W731N6ewFo2SqgmWFM1ni9fKygVGg-ez';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCUR7LbSCLJFP0BADxBxhPEHKSLxB71PCaQb5SVGvqTjkKJmSllfZ3gbzIqH6CqVXm1NQp0xr7v812yXNyYKlf2n5zeaFx3J4qy-o7O9l4I0xARUoLkV0RJ6jALQj0tDYCY0fN4lQ-j';
    // });


    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //   .pipe(map(data => {
    //     return data['albums'].items;
    //   }));

    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtistas(termino: string) {

    // const headers = new HttpHeaders({
    //   'Authorization': this.spotyauth
    // });

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=ES&limit=15`, { headers })
    //   .pipe(map(data => {
    //     return data['artists'].items;
    //   }));

    const query: string = `search?q=${termino}&type=artist&market=ES&limit=15`;

    return this.getQuery(query)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }


  getArtista(idArtista: string) {

    const query: string = `artists/${idArtista}`;

    return this.getQuery(query)
      .pipe(map(data => {
        return data;
      }));
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
