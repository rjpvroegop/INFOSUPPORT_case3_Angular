import {Component, OnInit} from "@angular/core";
import {Account} from "../../models/account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account: Account = new Account();

  login(){
    console.log(this.account.userName + ' ' + this.account.password);
  }
  constructor() { }

  ngOnInit() {
  }

}
