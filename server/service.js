import axios from 'axios';

const root = 'http://localhost:1337';

export const sign = (studentShortId,imgUrl,time) =>{
    return axios.post(`${root}/records`,{studentShortId,imgUrl,time}).then(({data})=>data);
};

export const getTask = (no) =>{
    return axios.get(`${root}/tasks/next/${no}`).then(({data})=>data);
};

export const finishTask = (taskShortId) =>{
    return axios.delete(`${root}/tasks/complete/${taskShortId}`).then(({data})=>data);
};