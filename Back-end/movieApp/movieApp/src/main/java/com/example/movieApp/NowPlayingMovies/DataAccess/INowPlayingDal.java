package com.example.movieApp.NowPlayingMovies.DataAccess;

import com.example.movieApp.NowPlayingMovies.Entities.NowPlayingMovie;
import org.json.simple.parser.ParseException;

import java.util.List;

public interface INowPlayingDal {
    List<NowPlayingMovie> getAll(String movies) throws ParseException;
    String nowPlayingApiCall();
    void add(NowPlayingMovie movie);
    void update(NowPlayingMovie movie);
    void delete(NowPlayingMovie movie);
    void deleteByID(long id);
    void updateByID(NowPlayingMovie movie);
    List<NowPlayingMovie> get();
    NowPlayingMovie getByID(long id);
}
