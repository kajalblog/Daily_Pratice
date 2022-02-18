function apiError(msg,code1):never
{
    throw {message:msg,code:code1}
}
console.log(apiError("server side Error",500));
