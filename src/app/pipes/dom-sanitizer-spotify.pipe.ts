import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizerSpotify'
})
export class DomSanitizerSpotifyPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }
  transform(uri: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://open.spotify.com/embed?uri=' + uri);
  }

}
