import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: any = {};
  loadingMovie: boolean;

  constructor(private router: ActivatedRoute, private moviedb: MoviedbService, private _location: Location) {
    this.loadingMovie = true;

    this.router.params.subscribe(params => {

      this.moviedb.getMovie(params['id'])
        .subscribe(movies => {
          this.movies = movies;
          this.loadingMovie = false;
        })
        
    })
  }

  ngOnInit(): void {
  }

  goBack(){
    this._location.back();
  }
}
