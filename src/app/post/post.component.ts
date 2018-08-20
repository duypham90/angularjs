import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ListNew } from '../models/ListNew';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PostComponent implements OnInit {
    private apiUrl = 'https://tinanime.com/api/news/?offset=12&limit=10';  // URL to web api

    constructor(private http: HttpClient) {
        console.log(1);
        this.getNew();
    }

    /** GET new from the server */
    getNew(): Observable<ListNew[]> {
        return this.http.get<ListNew[]>(this.apiUrl);
    }

    ngOnInit() {
    }
}
