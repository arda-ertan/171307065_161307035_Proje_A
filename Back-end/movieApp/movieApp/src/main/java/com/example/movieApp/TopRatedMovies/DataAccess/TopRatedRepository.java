package com.example.movieApp.TopRatedMovies.DataAccess;

import com.example.movieApp.TopRatedMovies.Entities.TopRatedMovie;
import org.springframework.data.repository.CrudRepository;

public interface TopRatedRepository extends CrudRepository<TopRatedMovie, Long> {
}
