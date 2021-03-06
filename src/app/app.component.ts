import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Project Shopping';

  constructor(private authservice: AuthService){}

  // loadedFeature = 'recipe';
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
  
  ngOnInit(){
    this.authservice.autoLogin();
  }
}
