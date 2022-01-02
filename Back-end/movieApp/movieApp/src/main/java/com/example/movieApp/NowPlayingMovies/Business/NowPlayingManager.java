package com.example.movieApp.NowPlayingMovies.Business;

import com.example.movieApp.NowPlayingMovies.DataAccess.INowPlayingDal;
import com.example.movieApp.NowPlayingMovies.Entities.NowPlayingMovie;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NowPlayingManager implements INowPlayingService {

    private INowPlayingDal movieDal;

    @Autowired
    public NowPlayingManager(INowPlayingDal movieDal) {
        this.movieDal = movieDal;
    }

    @Override
    public List<NowPlayingMovie> getAll(String movies) throws ParseException {
        return movieDal.getAll(movies);
    }

    @Override
    public String nowPlayingApiCall() {
        return movieDal.nowPlayingApiCall();
    }

    @Override
    public void add(NowPlayingMovie movie) {
        movieDal.add(movie);
    }

    @Override
    public void update(NowPlayingMovie movie) {
        movieDal.update(movie);
    }

    @Override
    public void delete(NowPlayingMovie movie) {
        movieDal.delete(movie);
    }

    @Override
    public List<NowPlayingMovie> get() {return movieDal.get();}

    @Override
    public NowPlayingMovie getByID(long id) {
        return movieDal.getByID(id);
    }

    @Override
    public void deleteByID(long id) {
        movieDal.deleteByID(id);
    }

    @Override
    public void updateByID(NowPlayingMovie movie) {
        movieDal.updateByID(movie);
    }
}
