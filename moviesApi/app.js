let btnSearch = document.querySelector('#btnSearch')
let moviesForm = document.querySelector('#moviesForm')
let imagesContainer = document.querySelector('#imagesContainer')



let searchMovie = async (e) => {
   e.preventDefault();
   deleteSearch();
   let inputMovie = document.querySelector('#inputMovie').value;
   let moviesData = await movies(inputMovie);
   makeImages(moviesData)
   
}

let deleteSearch = () =>{
   var node= document.querySelector("#imagesContainer");
   node.querySelectorAll('*').forEach(n => n.remove());
}

let makeImages = (movies) => {
   let imagesContainer= document.querySelector('#imagesContainer')
   if (movies.length !== 0){
      movies.forEach(movie => {
         let img = document.createElement('img')
         img.src = movie.show.image.medium;
         img.classList = 'moviesCard';
         imagesContainer.append(img);
      });
   }
   else {
      let h1 = document.createElement('h1')
      h1.innerHTML = "No Movie Found" ;
      imagesContainer.append(h1)
   }
   inputMovie.value=""; 
}


//Kukunin data from server
 let movies = async (inputMovie) =>{
    try{
      let config = {
         params:{
            q : inputMovie
         }
      }
      let res = await axios.get( `https://api.tvmaze.com/search/shows` , config)
      return res.data;
    }catch(e){
      return ('error');
    }
  
 } 





btnSearch.addEventListener('click', searchMovie)