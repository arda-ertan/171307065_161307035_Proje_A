package com.example.movieApp.TopRatedMovies.DataAccess;

import com.example.movieApp.NowPlayingMovies.Entities.NowPlayingMovie;
import com.example.movieApp.TopRatedMovies.Entities.TopRatedMovie;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TopRatedDal implements ITopRatedDal {

    private TopRatedRepository topRatedRepository;

    @Autowired
    public TopRatedDal(TopRatedRepository topRatedRepository) {
        this.topRatedRepository = topRatedRepository;
    }

    @Override
    public List<TopRatedMovie> getAll(String movies) throws ParseException {

        JSONObject jsonObject = new JSONObject(movies);
        JSONArray results = jsonObject.getJSONArray("results");

        List<TopRatedMovie> movieList = new ArrayList<>();

        for (int i = 0; i < results.length(); i++) {

            JSONObject result = results.getJSONObject(i);
            TopRatedMovie movie = new TopRatedMovie(result.getLong("id"),
                    result.getString("original_language"),
                    result.getString("original_title"),
                    result.getString("poster_path"),
                    result.getString("release_date"),
                    result.getDouble("vote_average"),
                    result.getString("overview")
            );

            movieList.add(movie);
        }

        return movieList;
    }

    @Override
    public String topRatedApiCall() {
        String url = "https://api.themoviedb.org/3/movie/top_rated?api_key=d4396629dc227d594ed4f3b251c2f851&language=en-US&page=1";
        RestTemplate restTemplate = new RestTemplate();
        String topRatedMovies = restTemplate.getForObject(url, String.class);
        return topRatedMovies;
    }

    @Override
    public void add(TopRatedMovie movie) {
        topRatedRepository.save(movie);
        System.out.println("saved");
    }


    @Override
    public void update(TopRatedMovie movie) {
        topRatedRepository.save(movie);
        System.out.println("saved");
    }

    @Override
    public void delete(TopRatedMovie movie) {
        topRatedRepository.delete(movie);
        System.out.println("deleted");
    }

    @Override
    public TopRatedMovie getByID(long id) {
        TopRatedMovie movie = topRatedRepository.findById(id).get();
        return movie;
    }

    @Override
    public void deleteByID(long id) {
        topRatedRepository.deleteById(id);
        System.out.println("deleted by id");
    }

    @Override
    public List<TopRatedMovie> get() {
        return (List<TopRatedMovie>) topRatedRepository.findAll();
    }
}
