import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isCollapsed = false;
  currentRoute: (string | null)[] = [];

  constructor(private router: Router, private location: Location, public authService: AuthenticationService) {
    this.router.events.subscribe(val => {
      if (location.path() != "") {
        let arrayPath = location.path().split("/").map(route => {
          if (route != "") {
            return route.replace("/", "")[0].toLocaleUpperCase() + route.replace("/", "").substring(1);
          }

          return null;
        });

        this.currentRoute = this.arrayRemove(arrayPath, null);
      } else {
        this.currentRoute = ["Home"];
      }
    });
  }

  ngOnInit(): void {
  }

  arrayRemove(arr: any, value: any) {

    return arr.filter((ele: any) => {
      return ele != value;
    });
  }

  onSubmit() {
    this.authService.login({ userName: 'marriottAdmin', password: 'marriottAdmin'}).subscribe({
      next: val => console.log(val),
      error: e => console.log(e)
    });
  }

}
