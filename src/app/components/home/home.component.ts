import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsMovies: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {
    
    this.loading = true;

    this.moviedb.getDiscoverMovies().subscribe((data: any) => {
      this.newsMovies = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
