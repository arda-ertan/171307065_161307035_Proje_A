package com.example.movieApp.TopRatedMovies.Controller;

import com.example.movieApp.TopRatedMovies.Business.ITopRatedService;
import com.example.movieApp.TopRatedMovies.Entities.TopRatedMovie;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/topRated")
public class TopRatedController {

    private ITopRatedService movieService;

    @Autowired
    public TopRatedController(ITopRatedService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/api")
    public String getTopRatedMovies(){
        return movieService.topRatedApiCall();
    }

    @GetMapping("/movies")
    public List<TopRatedMovie> get() throws ParseException {
        String movies = movieService.topRatedApiCall();
        return movieService.getAll(movies);
    }
    @GetMapping("/get")
    public List<TopRatedMovie> getFromDB(){
        return movieService.get();
    }

    @GetMapping("/edit/{id}")
    public TopRatedMovie getByID(@PathVariable long id){
        return movieService.getByID(id);
    }


    @PostMapping("/add")
    public void add(@RequestBody TopRatedMovie movie){
        movieService.add(movie);
    }

    @PutMapping("/edit/{id}")
    public void update(@RequestBody TopRatedMovie movie){movieService.update(movie); }

    @PostMapping("/delete")
    public void delete(@RequestBody TopRatedMovie movie){
        movieService.delete(movie);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteByID(@PathVariable long id ){ movieService.deleteByID(id);}

}
