package com.example.movieApp.TopRatedMovies.Entities;

import javax.persistence.*;

@Entity
@Table(name = "toprated")
public class TopRatedMovie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "original_language")
    private String originalLanguage;
    @Column(name = "original_title")
    private String originalTitle;
    @Column(name = "poster_path")
    private String posterPath;
    @Column(name = "release_date")
    private String releaseDate;
    @Column(name = "vote_average")
    private Double voteAverage;
    @Column(name = "overview")
    private String overview;

    public TopRatedMovie(Long id, String originalLanguage, String originalTitle, String posterPath, String releaseDate, Double voteAverage,String overview) {
        this.id = id;
        this.originalLanguage = originalLanguage;
        this.originalTitle = originalTitle;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.voteAverage = voteAverage;
        this.overview=overview;
    }

    public TopRatedMovie(){}

    public String getOverview() {return overview;}

    public void setOverview(String overview) {this.overview = overview;}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOriginalLanguage() {
        return originalLanguage;
    }

    public void setOriginalLanguage(String originalLanguage) {
        this.originalLanguage = originalLanguage;
    }

    public String getOriginalTitle() {
        return originalTitle;
    }

    public void setOriginalTitle(String originalTitle) {
        this.originalTitle = originalTitle;
    }

    public String getPosterPath() {
        return posterPath;
    }

    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Double getVoteAverage() {
        return voteAverage;
    }

    public void setVoteAverage(Double voteAverage) {
        this.voteAverage = voteAverage;
    }
}

