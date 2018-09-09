import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    SocialUser
} from '../social-login/index';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

    @ViewChild('stickyMenu') menuElement: ElementRef;

    isAuthSocial: boolean = false;
    sticky: boolean = false;
    offsetTop: number = 100;
    isActive: boolean = false;
    user: SocialUser;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.isAuthSocial = true;
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.isAuthSocial = false;
        });
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll() {
        this.sticky = (window.pageYOffset >= this.offsetTop) ? true : false;
    }

    private activeMenu(): void {
        this.isActive = !this.isActive;
    }

    public signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => console.log(res));
    }

    public signOut(): void {
        this.authService.signOut();
    }
}
