import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export class ChatMessageDTO {
  user_name: string;
  user_lastname:string;
  img:any;
  date:Date = new Date();
  message: string;

  constructor(user_name: string,user_lastname:string,img:any,date:Date, message: string){
      this.user_name = user_name;
      this.user_lastname = user_lastname;
      this.img = img;
      this.date = date;
      this.message = message;
  }
}
@Component({
  selector: 'app-chatshop',
  templateUrl: './chatshop.component.html',
  styleUrls: ['./chatshop.component.scss']
})



export class ChatshopComponent implements OnInit {
  webSocket: WebSocket;
  
  chatMessages: ChatMessageDTO[] = [];
  constructor(private  authService :  AuthService, private router :Router,
    private httpclient :  HttpClient,
    
    ) { }
  isLoggedIn: boolean;
  profs: any;

  date : Date;
  messages:any;
  ngOnInit(): void {

    this.openWebSocket();
    this.getPrifile();
    //this.paramurl = this.Activated.snapshot.params.id

   
  }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:8091/chat');
  
    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };
  
    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };
  
    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }
  
  public sendMessage(chatMessageDto: ChatMessageDTO){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }
  
  public closeWebSocket() {
    this.webSocket.close();
  }

  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      //alert(res);
      this.profs=res;
    })
  }

 
  sendMessage2() {
    this.date=new Date();
    //this.service.getUserByID(Math.floor(Math.random()*this.users.length)).subscribe((res:User)=> this.user = res);
   
      const chatMessageDto = new ChatMessageDTO(this.profs.username,this.profs.email,this.profs.lprofile.picprofile,this.date, this.messages);
    this.sendMessage(chatMessageDto);
    this.messages = '';
    
  }

}
