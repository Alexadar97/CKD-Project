import { Component, OnInit, ElementRef } from '@angular/core';
// import { ROUTES } from '../sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    // private listTitles: any[];
    // location: Location;
    // private toggleButton: any;
    // private sidebarVisible: boolean;

    // logintype: any;

    constructor(location: Location, private element: ElementRef, public router: Router) {
        // this.location = location;
        // this.sidebarVisible = false;
    }

    ngOnInit() {
        // this.listTitles = ROUTES.filter(listTitle => listTitle);
        // const navbar: HTMLElement = this.element.nativeElement;
        // this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        // this.logintype = localStorage.getItem('logintype');
    }

    // sidebarOpen() {
    //     const toggleButton = this.toggleButton;
    //     const body = document.getElementsByTagName('body')[0];
    //     setTimeout(function () {
    //         toggleButton.classList.add('toggled');
    //     }, 500);
    //     body.classList.add('nav-open');

    //     this.sidebarVisible = true;
    // };
    // sidebarClose() {
    //     const body = document.getElementsByTagName('body')[0];
    //     this.toggleButton.classList.remove('toggled');
    //     this.sidebarVisible = false;
    //     body.classList.remove('nav-open');
    // };
    // sidebarToggle() {
    //     // const toggleButton = this.toggleButton;
    //     // const body = document.getElementsByTagName('body')[0];
    //     if (this.sidebarVisible === false) {
    //         this.sidebarOpen();
    //     } else {
    //         this.sidebarClose();
    //     }
    // };

    // getTitle() {
    //     var titlee = this.location.prepareExternalUrl(this.location.path());
    //     if (titlee.charAt(0) === '#') {
    //         titlee = titlee.slice(2);
    //     }
    //     titlee = titlee.split('/').pop();

    //     for (var item = 0; item < this.listTitles.length; item++) {
    //         if (this.listTitles[item].path === titlee) {
    //             return this.listTitles[item].title;
    //         }
    //     }
    //     return 'Dashboard';
    // }

    // logout() {
    //     this.deleteCookie('disc-cookies')
    //     localStorage.removeItem('disc-portal-session');
    // }
    // deleteCookie(cname) {
    //     var d = new Date();
    //     d.setTime(d.getTime() - (3 * 3600000000));
    //     var expires = "expires=" + d.toUTCString();
    //     window.document.cookie = cname + "=" + "; " + expires;

    // }
}
