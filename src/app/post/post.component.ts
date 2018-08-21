import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { IPost } from './post';
import { PostService } from './post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ PostService ]
})

@Injectable()
export class PostComponent implements OnInit {
    
    private posts: IPost[] = [];
    private isLoading: boolean = false;
    private offset: number = 0;
    private limit: number = 20;
    
    constructor(private postService: PostService ) { }

    ngOnInit() {
        this.getPost();
    }

    // /** GET new from the server */
    private getPost(): void {
        this.isLoading = true;
        this.makeRequest(this.offset, this.limit);
    }

    private loadMore(): void {
        this.offset = this.offset + this.limit;
        console.log(this.offset, this.limit);
        this.makeRequest(this.offset, this.limit);
    }

    private makeRequest(offset: number, limit: number): void {
        this.isLoading = true;
        this.postService.getPost(offset, limit).subscribe(data => {
            this.posts.push(...data);
            this.isLoading = false;
        }, err => console.log(err));
    }
}
