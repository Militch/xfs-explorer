import axios from "axios";

const apiCli = axios.create({
    baseURL: 'http://localhost:8083',
    timeout: 1000
});

export function getStatus(options){
    return new Promise((resolve, reject)=>{
        apiCli.request({
            url: '/status',
            method: 'GET',
            ...(options||{})
        }).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        });
    });
}

export function getLatest(options){
    return new Promise((resolve, reject)=>{
        apiCli.request({
            url: '/latest',
            method: 'GET',
            ...(options||{})
        }).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        });
    });
}
export function getBlocksByPage(options){
    return new Promise((resolve, reject)=>{
        apiCli.request({
            url: '/blocks',
            method: 'GET',
            ...(options||{})
        }).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        });
    });
}

export function getTransactionsByPage(options){
    return new Promise((resolve, reject)=>{
        apiCli.request({
            url: '/txs',
            method: 'GET',
            ...(options||{})
        }).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        });
    });
}

export function getBlockByHash(hash,options){
    return new Promise((resolve, reject)=>{
        apiCli.request({
            url: `/blocks/${hash}`,
            method: 'GET',
            ...(options||{})
        }).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        });
    });
}

export function getTransactionByHash(hash,options){
    return new Promise((resolve, reject)=>{
        apiCli.request({
            url: `/txs/${hash}`,
            method: 'GET',
            ...(options||{})
        }).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err.data);
        });
    });
}