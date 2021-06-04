import { Component, Input, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-pollsmall',
  templateUrl: './pollsmall.component.html',
  styleUrls: ['./pollsmall.component.scss']
})
export class PollsmallComponent implements OnInit {

  @Input() poll: Poll;
  selected: number;
  votingEnded = false;

  constructor(private pollService: PollService) { }

 

  ngOnInit(): void {
    const now = new Date();

    if (new Date(this.poll.endDate).getTime() < now.getTime()) {
      this.votingEnded = true;
    }
  }

  vote() {
    this.pollService.vote(this.poll.id, this.selected).subscribe(success => {
      this.poll.voted = true;
     // this.flashMessagesService.show('Vote submitted!', { cssClass: 'card-panel green lighten-4', timeout: 3000 });
    }, error => {
      console.log(error);
     // this.flashMessagesService.show('You can\'t vote twice', { cssClass: 'card-panel red lighten-3', timeout: 3000 });
    });
  }


}
