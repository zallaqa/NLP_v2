const axios = require("axios");
const { response } = require("express");
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";

const mockAPIResponse = async (url, Key) => {
const mockAPIs = await axios.get(`${meaningCloud}?key=${Key}&url=${url}&lang=en`)
    .then (response =>{
       const{code} = response.data.status
       const {msg} = response.data.status
       if(code == 100){
        return hErrors(code,msg)
       }
       else if(code == 212){
        return hErrors(code,msg)

       }
       return hSucess(response.data,code)
    });

    return mockAPIs

    // console.log(mockAPIs);
    
};

const hErrors = (code, msg) =>{
  const error ={
    code,
    msg
  }

  return  error
}


// Results
// agreement
// subjectivity
// confidence
// irony

const hSucess = (data, code) =>{
    const { agreement, subjectivity, confidence, irony,score_tag } = data
    const tijab = {
        agreement,
        subjectivity,
        confidence,
        irony,
        score_tag

    }

    const result = {
        tijab,
        code
    }
    return result
}

module.exports = {mockAPIResponse};
