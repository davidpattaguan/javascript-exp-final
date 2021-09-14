


let h1 = document.querySelector('#jokeH1')
let jokeBtn = document.querySelector('#jokeBtn')

const jokesText = async () => {
    let joke = await getJokes();
    h1.innerHTML = joke;
}

const getJokes = async () => {
    try{
        const config = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/' , config);
        return res.data.joke;
    }
    catch (e){
        return ('Cannot Generate Jokes as For the Moment!');
    }
}

jokeBtn.addEventListener('click', jokesText)