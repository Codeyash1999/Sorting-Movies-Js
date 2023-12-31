/**
 * Done: Change sortMoviesByRank() function to sort movies list by rank
 * Done: Sort movies by id, rank, and title through dynamic function
 * Done: Create helper function called getMaxMovieObject() for finding max movie
 */

// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 5,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 9,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 2,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function () {
    // displayMovies(sortMoviesByAttr(movies, 'rank'));
    // Display Movies list
    displayMovies(sortMoviesByAttr(movies, 'rank'));
    // console.log(movies);

}

/**
 * Display list of movies in a table
 * You don't have to worry so much about this
 */
function displayMovies(movies) {
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for (let index = 0; index < movies.length; index++) {
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


/**
 * Sort movies by rank from greatest to smallest 
 * HINT: make sure you are comparing the right value in in if(...)
 * HINT: replace numbers with movies .
 */
function sortMoviesByRank(numbers) {
    // Code from previous sortBestRatingsFirst() function
    for (let j = 0; j < numbers.length - 1; j++) { //j = 0 - 8

        let max_num = numbers[j];//10
        let max_location = j;

        // for (let i = j; i < numbers.length; i++) { //i = 0 - 9
        //     if (numbers[i].rank > max_num.rank) { //10 > 10? 
        //         // Know max AND it's index (location)
        //         max_num = numbers[i]
        //         max_location = i
        //     }
        // }
        // swap the first and the last
        numbers[max_location] = numbers[j] // --> 10
        numbers[j] = max_num
    }

    return numbers
}

/**
 * Sort movies by an attribute
 * @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttr(movies, sortAttr) {
    // CODE GOES HERE
    for (let j = 0; j < movies.length - 1; j++) {
        let max_num = movies[j];
        let max_location = j;
        let max = getMaxMovieObject(movies, j, sortAttr);
        max_obj = max.max_obj;
        max_location = max.max_index;


        for (let i = j; i < movies.length; i++) {
            console.log(movies[i][sortAttr]);
            if (movies[i][sortAttr] > max_num[sortAttr]) {
                max_num = movies[i];
                max_location = i;
            }
        }
        movies[max_location] = movies[j];
        movies[j] = max_num;
    }


    return movies;
}

/**
 * Retrieve the max movie object based on attribute
 * HINT: make sure you are comparing the right attribute
 */
function getMaxMovieObject(movies, start, sortAttr) {
    // Code from previous findMaxHelper() function
    let max_obj = movies[start];
    let max_location = start

    for (let i = start; i < movies.length; i++) {
        if (movies[i][sortAttr] > max_obj[sortAttr]) {
            max_obj = movies[i]
            max_location = i
        }
    }
    return { max_obj: max_obj, max_index: max_location }
}



