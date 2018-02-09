import { Component, OnInit } from "@angular/core";
import { Button } from "ui/button";

import { Kinvey } from 'kinvey-nativescript-sdk';


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    isLoggedIn:boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    submit() {        
        if (Kinvey.User.getActiveUser() == null){
            Kinvey.User.loginWithMIC('http://example.com', Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage, { version: 'v2' })
            
            .then((user: Kinvey.User) => {
                alert("Logged in!");
                console.log("user: " + user);
                this.isLoggedIn = true;
            })
            .catch((error: Kinvey.BaseError) => {
                alert("Error!");
                console.log("error: " + error);
            });            
        }
        else {
            Kinvey.User.logout()
            .then(()=> {
                this.isLoggedIn = false;
            });
        }


    }
}
