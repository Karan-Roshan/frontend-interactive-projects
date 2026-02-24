const avatar = document.querySelector("#avatar");
const name = document.querySelector("#name");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");


const requestUrl = "https://api.github.com/users/Karan-Roshan";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        
        name.innerHTML = data.name;
        repos.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        avatar.src = data.avatar_url;
    }
}
xhr.send();
