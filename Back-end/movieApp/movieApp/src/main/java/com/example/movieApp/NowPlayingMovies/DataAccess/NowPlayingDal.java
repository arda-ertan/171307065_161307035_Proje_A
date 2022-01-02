package com.example.movieApp.NowPlayingMovies.DataAccess;

import com.example.movieApp.NowPlayingMovies.Entities.NowPlayingMovie;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class NowPlayingDal implements INowPlayingDal {

    private NowPlayingRepository nowPlayingRepository;

    @Autowired
    public NowPlayingDal(NowPlayingRepository nowPlayingRepository) {
        this.nowPlayingRepository = nowPlayingRepository;
    }

    @Override
    public String nowPlayingApiCall() {
        String url = "https://api.themoviedb.org/3/movie/now_playing?api_key=d4396629dc227d594ed4f3b251c2f851&language=en-US&page=1";
        RestTemplate restTemplate = new RestTemplate();
        String nowPlayingMovies = restTemplate.getForObject(url, String.class);
        return nowPlayingMovies;
    }

    @Override
    public void add(NowPlayingMovie movie) {
        nowPlayingRepository.save(movie);
        System.out.println("saved");
    }

    @Override
    public void update(NowPlayingMovie movie) {
        nowPlayingRepository.save(movie);
        System.out.println("updated");
    }

    @Override
    public void updateByID(NowPlayingMovie movie) {

        nowPlayingRepository.save(movie);

    }


    @Override
    public void delete(NowPlayingMovie movie) {
        nowPlayingRepository.delete(movie);
        System.out.println("deleted");
    }

    @Override
    public void deleteByID(long id) {
        nowPlayingRepository.deleteById(id);
        System.out.println("deleted by id");
    }

    @Override
    public List<NowPlayingMovie> get() {
       return (List<NowPlayingMovie>) nowPlayingRepository.findAll();
    }
    @Override
    public NowPlayingMovie getByID(long id) {
        NowPlayingMovie movie = nowPlayingRepository.findById(id).get();

        return movie;
    }

    @Override
    public List<NowPlayingMovie> getAll(String movies) throws ParseException {

        JSONObject jsonObject = new JSONObject(movies);
        JSONArray results = jsonObject.getJSONArray("results");

        List<NowPlayingMovie> movieList = new ArrayList<>();

        for (int i = 0; i < results.length(); i++) {

            JSONObject result = results.getJSONObject(i);
            NowPlayingMovie movie = new NowPlayingMovie(result.getLong("id"),
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
}
