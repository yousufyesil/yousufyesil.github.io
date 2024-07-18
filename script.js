function request(){
        fetch("www.omdbapi.com/?apikey=d4207b30&s=Star+Wars")
    .then(response => response.json())
}
