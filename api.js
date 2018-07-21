import "isomorphic-fetch";


class Api {

    static getMediumRSS(){
        fetch('https://medium.com/feed/@gdriza').then(resp => resp.json())
        .then(console.log)
    }
}

export default Api 