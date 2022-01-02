package com.example.movieApp.NowPlayingMovies.Controller;

import com.example.movieApp.NowPlayingMovies.Business.INowPlayingService;
import com.example.movieApp.NowPlayingMovies.Entities.NowPlayingMovie;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/nowPlaying")
public class NowPlayingController {

    private INowPlayingService movieService;

    @Autowired
    public NowPlayingController(INowPlayingService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/api")
    public String getNowPlayingMovies(){
        return movieService.nowPlayingApiCall();
    }

    @GetMapping("/movies")
    public List<NowPlayingMovie> getAPI() throws ParseException {
        String movies = movieService.nowPlayingApiCall();
        return movieService.getAll(movies);
    }

    @GetMapping("/get")
    public List<NowPlayingMovie> get() {
       return movieService.get();
    }

    @GetMapping("/edit/{id}")
    public NowPlayingMovie getByID(@PathVariable long id){
        return movieService.getByID(id);
    }

    @PostMapping("/add")
    public void add(@RequestBody NowPlayingMovie movie){
        movieService.add(movie);
    }

    @PostMapping("/update")
    public void update(@RequestBody NowPlayingMovie movie){movieService.update(movie); }

    @PostMapping("/delete")
    public void delete(@RequestBody NowPlayingMovie movie){
        movieService.delete(movie);
    }

    @DeleteMapping("/deleteByID/{id}")
    public void deleteByID(@PathVariable long id){movieService.deleteByID(id);}

    @PutMapping("/edit/{id}")
    public void updateByID(@RequestBody NowPlayingMovie movie){movieService.updateByID(movie);}



}
