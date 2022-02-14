
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

const url = "https://api.github.com/users/Mu7ammadAbed";
const repoLink = "https://api.github.com/users/Mu7ammadAbed/repos";
const Contributorss =
  "https://api.github.com/repos/Mu7ammadAbed/art-gallery/contributors";

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const apiObj = JSON.parse(xhr.responseText);
    //console.log(apiObj);
    userHandle.textContent = apiObj.name;
    userAvatar.src = apiObj.avatar_url;

    userRepos.textContent = apiObj.public_repos;
  }
};
xhr.open("GET", url, true);
xhr.send();

const xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState == 4 && xhr2.status == 200) {
    const apiObj2 = JSON.parse(xhr2.responseText);
   // console.log(apiObj2);
    reporName.textContent = apiObj2[3].full_name;
    repoOpenIssues.textContent = apiObj2[3].open_issues_count;
    repoWatchers.textContent = apiObj2[3].watchers_count;
    repoCreated.textContent = apiObj2[3].pushed_at;

    // apiObj2.forEach((element) => {
    //   userLanguages.textContent = element.language;
    //   userStars.textContent = element.stargazers_count;

    //   console.log(element.stargazers_count);
    //   console.log(element.language);
    // });

    let languages = [];
    let stars = [];
    for (let i = 0; i < apiObj2.length; i++) {
      languages.push(apiObj2[i].language);
      stars.push(apiObj2[i].stargazers_count);

    }
    userLanguages.textContent += languages.join(", ");
    userStars.textContent += stars.join(", ");


  }
};
xhr2.open("GET", repoLink, true);
xhr2.send();

const xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = function () {
  if (xhr3.readyState == 4 && xhr3.status == 200) {
    const apiObj3 = JSON.parse(xhr3.responseText);
    //console.log(apiObj3);

    repoContributors.textContent = apiObj3[0].login;
  }
};
xhr3.open("GET", Contributorss, true);
xhr3.send();
