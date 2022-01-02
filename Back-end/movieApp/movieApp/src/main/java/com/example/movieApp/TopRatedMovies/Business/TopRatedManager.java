package com.example.movieApp.TopRatedMovies.Business;

import com.example.movieApp.TopRatedMovies.DataAccess.ITopRatedDal;
import com.example.movieApp.TopRatedMovies.Entities.TopRatedMovie;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TopRatedManager implements ITopRatedService {

    private ITopRatedDal movieDal;

    @Autowired
    public TopRatedManager(ITopRatedDal movieDal) {
        this.movieDal = movieDal;
    }

    @Override
    public List<TopRatedMovie> getAll(String movies) throws ParseException {
        return movieDal.getAll(movies);
    }

    @Override
    public String topRatedApiCall() {
        return movieDal.topRatedApiCall();
    }

    @Override
    public void add(TopRatedMovie movie) {
        movieDal.add(movie);
    }

    @Override
    public void update(TopRatedMovie movie) {
        movieDal.update(movie);
    }

    @Override
    public void delete(TopRatedMovie movie) {
        movieDal.delete(movie);
    }

    @Override
    public List<TopRatedMovie> get() {
        return movieDal.get();
    }

    @Override
    public TopRatedMovie getByID(long id) {
        return movieDal.getByID(id);
    }

    @Override
    public void deleteByID(long id) {
        movieDal.deleteByID(id);
    }
}
