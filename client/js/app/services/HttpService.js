class HttpService{

    post(url, dado){
        return axios.post(url, dado);
    }

    get(url){
        return axios.get(url);
    }
}