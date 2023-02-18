// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsListRaw = moviesArray.map((peli) => peli.director);
    //si lo dejabamos asi hacia el listado de todos los directores repetidos
    //return directorsListRaw;
    let directors = directorsListRaw.filter((director,index) => 
    directorsListRaw.indexOf(director)===index);
    return directors;
    
}
console.log(getAllDirectors(movies));

//const directorsArr = ['Steven Spielberg', 'Tarantino', 'Steven Spielberg'];
//const directorsNoRepetits = directorsArr.filter((director, index) => directorsArr.indexOf(director)===index);

// Primera iteració del filter:
// ("Steven Spielberg", 0) => 0 === 0 true! El posem a l'array nou (ho fa sol el filter)
// Segona iteració del filter:
// ("Tarantino", 1) => 1 === 1 true! El posem a l'array nou (ho fa sol el filter)
// Segona iteració del filter:
// ("Steven Spielberg", 3) => 1 === 3 false...

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenSpielberg=0;
    for(let i=0;i<moviesArray.length;i++);
    if(moviesArray.length= 0) {return 0;}
    else if (moviesArray.director == "Steven Spielberg" && moviesArray.genre.includes("Drama")) {stevenSpielberg+=};
    return stevenSpielberg;
        
    }
    console.log (howManyMovies(movies));
}


//corregido 2//

const stevenDramaFilteredMovies = movies.filter(movie) ==> {
    return(movie.director ==="Steven Spielberg"&& movie.genre.includes("Drama"));
};

return stevenDramaFilteredMovies.length


    

//    const filteredMovies = moviesArray.filter(movie) => 
//  return (moviesArray.director ==="Steven Spilberg" && moviesArray.genre.includes("Drama")));
        
//return filteredMovies.length;
//}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage2 = (moviesArray) => {
        if (!movies.length) return 0;
        const totalScore = moviesArray.reduce((accumulator, currentValue) => {
            if (currentValue.score) {
                return accumulator + currentValue.score;
            } else { 
                return accumulator
            }
        }, 0);
        return Number((totalScore/moviesArray.length)).toFixed(2);
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
//function dramaMoviesScore(moviesArray) {}
// movies es el nombre de la array sobre la que estamos trabajando



// respuesta ejercicio 4
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter( e => {
        return e.genre.includes("Drama")});
    return scoresAverage(dramaMovies);
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
let sortedByYear = moviesArray.slice(0).sort((one, two) => {
    if (one.year > two.year) return one.year - two.year
    if (one.year < two.year) return one.year - two.year
    else return one.title.localeCompare(two.title);
  });
  return sortedByYear;
};
console.table(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitles = moviesArray.map((movie) => movie.title);
    let sortByTitle = movieTitles.sort((a, b) => a > b ? 1 : -1);
    return sortByTitle.slice(0,20);
}
console.log(orderAlphabetically(movies))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
