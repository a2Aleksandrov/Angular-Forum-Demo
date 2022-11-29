import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { ITheme } from '../shared/interfaces';
import { IPost } from '../shared/interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private http: HttpClient) { }

  getAllThemes() {
    return this.http.get<ITheme[]>(`${environment.apiUrl}/themes`);
  }

  getThemeById() {
    return
  }

  getRecentPosts(limit: number) {
    return this.http.get<IPost[]>(`${environment.apiUrl}/posts${limit ? `?limit=${limit}` : ``}`);
  }
}
