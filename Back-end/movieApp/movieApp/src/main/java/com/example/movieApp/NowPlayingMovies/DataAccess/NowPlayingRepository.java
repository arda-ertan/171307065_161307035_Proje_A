package com.example.movieApp.NowPlayingMovies.DataAccess;

import com.example.movieApp.NowPlayingMovies.Entities.NowPlayingMovie;
import org.springframework.data.repository.CrudRepository;

public interface NowPlayingRepository extends CrudRepository<NowPlayingMovie, Long> {

}
