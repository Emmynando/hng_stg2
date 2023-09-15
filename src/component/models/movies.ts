class Movies {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: Date;
  vote_average: number;
  popularity: number;

  constructor(movText: string, movNumber: number, movDate: Date) {
    this.id = movText;
    this.title = movText;
    this.poster_path = movText;
    this.overview = movText;
    this.vote_average = movNumber;
    this.popularity = movNumber;
    this.release_date = movDate;
  }
}

export default Movies;
