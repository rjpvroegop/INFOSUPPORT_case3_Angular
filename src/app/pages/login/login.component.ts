import {Component, OnInit} from "@angular/core";
import {Account} from "../../models/account";
import {ActivatedRoute} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account: Account = new Account();
  errorMessage : boolean = false;

  login(){
    console.log(this.account.userName + ' ' + this.account.password);
  }
  constructor(private route: ActivatedRoute, private loginService : LoginService) {
    this.errorMessage = this.route.routeConfig.path.indexOf("/error") >= 0
  }

  ngOnInit() {
  }

}
