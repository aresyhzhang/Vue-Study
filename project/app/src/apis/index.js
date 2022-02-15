import request from './request';

export const reqCatagoryList=(data)=>request({
    url:"/test",
    method:'GET',
    data
})