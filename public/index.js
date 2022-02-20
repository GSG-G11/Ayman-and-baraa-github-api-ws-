/* let's go! */

const userHandle = document.querySelector("#github-user-handle");
const userAvatar = document.querySelector("#github-user-avatar");
const userRepos = document.querySelector("#github-user-repos");
const userLanguages = document.querySelector("#github-repos-languages");
const userStars = document.querySelector("#github-repos-stars");
const reporName = document.querySelector("#github-repo-name");
const repoCreated = document.querySelector("#github-repo-created");
const repoOpenIssues = document.querySelector("#github-repo-open-issues");
const repoWatchers = document.querySelector("#github-repo-watchers");
const repoContributors = document.querySelector("#github-repo-contributors");
const input = document.getElementById('search');
const submitBtn = document.getElementById('submit');
const video = document.querySelector("#video");

//create fetch to store xml
const fetch = (method,url,cb)=>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                cb(JSON.parse(xhr.responseText))
            }
        }
    }
    xhr.open(method,url);
    xhr.send();
}
// to show my profile in github when no profile name add
window.onload = () => {
    input.value = `naruto`;
    submitBtn.click();
};
// when click button search 
submitBtn.addEventListener("click",()=>{
    const userName = input.value;
    const url = `https://kitsu.io/api/edge/anime?filter%5Btext%5D=${userName}`
   const repoLink = `https://api.giphy.com/v1/gifs/search?api_key=BEhmVfKdPW8J3qZKPhXMCyNszDlbEci4&q=${userName}&limit=25&offset=0&rating=g&lang=en`

   
// const Contributorss =`https://api.github.com/repos/${userName}/art-gallery/contributors`

//xml1
const UserInfo =(apiObj) =>{
   // console.log(apiObj.data[0].fact);
  
     userAvatar.src=apiObj.data[0].attributes.posterImage.original;
   userHandle.textContent =apiObj.data[0].attributes.titles.en;
   userRepos.textContent = apiObj.data[0].attributes.synopsis;
//console.log(apiObj.data[0].attributes.posterImage.original);
}

//xml2
const userRepo = (apiObj2) =>{
    video.src =  apiObj2.data[0].url;
    console.log(apiObj2.data[0]);
    // userHandle.textContent = apiObj2[0].anime;
    // userRepos.textContent =apiObj2[0].quote;

}

//xml3
// const userCont = (apiObj3) =>{
//     repoContributors.textContent = apiObj3[0].login;
// }


fetch('GET' , url ,UserInfo)
fetch('GET' , repoLink , userRepo)
// fetch('GET' , Contributorss , userCont)

})
