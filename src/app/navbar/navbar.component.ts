import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
    @ViewChild('stickyMenu') menuElement: ElementRef;

    sticky: boolean = false;
    offsetTop: number = 100;
    isActive: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    private activeMenu(): void {
       this.isActive = !this.isActive;
    }

    @HostListener('window:scroll', ['$event'])
    handleScroll() {
        this.sticky = (window.pageYOffset >= this.offsetTop) ? true : false;
    }
}
