import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts!: IPost[];

  constructor(private themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.getRecentPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;
      }
    });
  }
}
