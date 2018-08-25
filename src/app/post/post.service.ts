import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { NEW_POST }   from '../api/constant';
import { IPost } from './post';

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
    constructor(private http: HttpClient) { }

    public getPost(offset, limit): Observable<IPost[]> {
        const params = new HttpParams()
            .set('offset', offset)
            .set('limit', limit);

        return this.http.get<IPost[]>(NEW_POST, { params });
    }
}
