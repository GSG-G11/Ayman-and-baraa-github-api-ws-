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
    input.value = `braaAwni`;
    submitBtn.click();
};
// when click button search 
submitBtn.addEventListener("click",()=>{
    const userName = input.value;
    const url = `https://api.github.com/users/${userName}`
    const repoLink = `https://api.github.com/users/${userName}/repos`
const Contributorss =`https://api.github.com/repos/${userName}/art-gallery/contributors`


//xml1
const UserInvo =(apiObj) =>{
    userHandle.textContent = apiObj.name;
    userAvatar.src = apiObj.avatar_url;

    userRepos.textContent = apiObj.public_repos;
}

//xml2
const userRepo = (apiObj2) =>{
    reporName.textContent = apiObj2[3].full_name;
    repoOpenIssues.textContent = apiObj2[3].open_issues_count;
    repoWatchers.textContent = apiObj2[3].watchers_count;
    repoCreated.textContent = apiObj2[3].pushed_at;

    let languages = [];
    let stars = [];
    for (let i = 0; i < apiObj2.length; i++) {
      languages.push(apiObj2[i].language);
      stars.push(apiObj2[i].stargazers_count);

    }
    userLanguages.textContent += languages.join(", ");
    userStars.textContent += stars.join(", ");
}

//xml3
const userCont = (apiObj3) =>{
    repoContributors.textContent = apiObj3[0].login;
}


fetch('GET' , url ,UserInvo)
fetch('GET' , repoLink , userRepo)
fetch('GET' , Contributorss , userCont)

})