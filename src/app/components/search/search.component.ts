import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies: any = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) { }

  search(end: string){
    if(end == ""){
      return;
    }
    this.loading = true;
    this.moviedb.getSearchMovies(end).subscribe((data: any) => {
      this.movies = data;
      this.loading = false;
    });
    
  }

  ngOnInit(): void {
  }

}
