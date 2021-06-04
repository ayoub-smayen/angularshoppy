import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player'; 


@Component({
  selector: 'app-musicpage',
  templateUrl: './musicpage.component.html',
  styleUrls: ['./musicpage.component.scss']
})
export class MusicpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;
   
// Material Style Advance Audio Player Playlist (trackEnded)="onEnded($event)"
msaapPlaylist: Track[] = [
  {
    title: 'tunsi music',
    link: '../../../assets/11. Aliah Blaid - Houssi Boussigah.mp3',
    artist: 'shopping tunisi w asme3 tunisi',
    duration: 180
  },
  {
    title: 'tunisi music',
    link: '../../../assets/04. Noura Amine - Meryam.mp3',
    artist: 'shopping tunisi w asme3 tunisi',
    duration: 180
  },
  {
    title: 'tunsi music',
    link: '../../../assets/01. Ouled Jouini - Jerba Zarzis.mp3',
    artist: 'shopping tunisi w asme3 tunisi',
    duration: 180
  },
];

}
