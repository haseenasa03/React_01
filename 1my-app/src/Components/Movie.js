let Movie=()=>
{
    let movie_details={
        movie_name:"avatar 2",
        dir_name:"james cameran",
        actor:"dont know",
        actress:"nayana"
    }
    return <div>
        <pre>{JSON.stringify(movie_details)}</pre>
        <h2>movie info</h2>
        <h2>movie_name:{movie_details.movie_name}</h2>
        <h2>dir name:{movie_details.actress}</h2>
    </div>
}
export default Movie