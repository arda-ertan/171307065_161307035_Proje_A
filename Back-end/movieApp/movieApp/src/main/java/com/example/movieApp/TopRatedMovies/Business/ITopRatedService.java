package com.example.movieApp.TopRatedMovies.Business;

import com.example.movieApp.NowPlayingMovies.Entities.NowPlayingMovie;
import com.example.movieApp.TopRatedMovies.Entities.TopRatedMovie;
import org.json.simple.parser.ParseException;

import java.util.List;

public interface ITopRatedService {
    List<TopRatedMovie> getAll(String movies) throws ParseException;
    String topRatedApiCall();
    void add(TopRatedMovie movie);
    void update(TopRatedMovie movie);
    void delete(TopRatedMovie movie);
    List<TopRatedMovie> get();
    TopRatedMovie getByID(long id);
    void deleteByID(long id);
}
