class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get ratings() {
    return this._ratings;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  set isCheckedOut(newIsCheckedOut) {
    if (typeof newIsCheckedOut === "boolean") {
      this._isCheckedOut = newIsCheckedOut;
    }
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (acc, currValue) => acc + currValue,
      0
    );
    return ratingsSum / this.ratings.length;
  }
  toggleCheckOutStatus() {
    if (isCheckedOut === true) {
      return isCheckedOut === false;
    } else {
      return isCheckedOut === true;
    }
  }
  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}
