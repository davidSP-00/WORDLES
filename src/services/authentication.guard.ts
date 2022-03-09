export const authGuard=(email:string,token:string)=>{
    return  {
        headers: {
            'Authorization': 'Bearer ' + token
        }, params: { email: email }
    }
}