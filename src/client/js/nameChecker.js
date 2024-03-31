const validUrl = require('valid-url');

const isvalidUrl = (url) => Boolean(validUrl.isWebUri(`${url}`));

const validateUrl = (url) =>{
    return isvalidUrl(url)
}


export{validateUrl}

