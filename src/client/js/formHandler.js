import axios from "axios";
import { validateUrl } from "./nameChecker";

const input = document.querySelector("form input");
const error = document.querySelector("#error")
const form = document.querySelector("form");
const agreement = document.getElementById("agreement");
const subjectivity = document.getElementById("subjectivity");
const confidence=  document.getElementById("confidence");
const irony = document.getElementById("irony");
const score_tag = document.getElementById("score_tag");



const  formHandler = async (event) => {
    event.preventDefault();
    if(!validateUrl(input.value)){
        showError("enter valid Url")
        return;
    }
    const {data} = await axios.post('http://localhost:8080/',form,{
        headers: {
            'Content-Type': 'application/json'
          }
    })

   const  {msg , tijab} = data
    if(msg){
        showError(msg)
        return ;
    }

    showResults(tijab)
}

const showError = (msg) =>{
    error.style.display ="block"
    error.innerHTML = msg
}

const showResults = (tijab) =>{

    error.style.display ="none"

agreement.innerHTML = `Agreement: ${tijab.agreement}`;
 subjectivity.innerHTML = `Subjectivity: ${tijab.subjectivity}`;
 confidence.innerHTML = `Confidence: ${tijab.confidence}`;
 irony.innerHTML = `Irony: ${tijab.irony}`;
 score_tag.innerHTML = `Score Tag: ${tijab.score_tag}`;
 }

export { formHandler }
