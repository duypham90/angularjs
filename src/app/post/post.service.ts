import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// import Post Interface
import { IPost } from './post';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface IPost {
    id: number;
    title: string;
    description: string;
    view: number;
    published_at: string;
    thumbnail: string;
}

@Injectable()
export class PostService {
    private apiUrl = 'https://tinanime.com/api/news/?offset=12&limit=10';  // URL to web api

    constructor(private http: HttpClient) { }

    public getPost(offset: number, limit: number): Observable<IPost[]> {
        return this.http.get<IPost[]>(this.apiUrl);
    }
}
