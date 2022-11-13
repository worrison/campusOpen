import APIRequest from "./config/axios.config";


export default function getRandomUser(){

    return APIRequest.get('/'); //https://randomuser.me/api/
}