import "isomorphic-fetch";


class Api {

    static getMediumRSS(){
        let xmlAsJson;
        return fetch('https://cors-anywhere.herokuapp.com/medium.com/feed/@gdriza')
        .then(resp => resp.text(resp))
    }
}

export default Api 

// resp.text()