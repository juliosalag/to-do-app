import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo Applicattion for SD';

  email: string = 'test';
  password: string = 'test';

  constructor(public userService: UserService){

  }

  displayName = '';

  ngOnInit(){
    this.login();
    this.userService.getUser().subscribe(
      user => { this.displayName = user.name }
    );
  }

  login(){
    const user = {email: this.email, password: this.password};
    this.userService.signIn(user).subscribe(
      (loggedUser) => {
        this.userService.setToken(loggedUser.token);
        console.log("Login correcto");
        console.log(loggedUser.token);
      },
      (err) => {
        console.log("Error en el login");
        console.log(err);
      }
    );
  }
}
