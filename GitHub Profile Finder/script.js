const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("username");

searchBtn.addEventListener("click", () => {

    const username = usernameInput.value.trim();

    if (!username) {
        alert("Please enter a username");
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("User not found");
            }
            return response.json();
        })
        .then(data => {

            const card = document.getElementById("profileCard");
            card.style.display = "flex";   // keep flex layout

            document.getElementById("avatar").src = data.avatar_url;
            document.getElementById("githubName").textContent = data.name || "No Name";
            document.getElementById("githubUsername").textContent = "@" + data.login;
            document.getElementById("repos").textContent = data.public_repos;
            document.getElementById("followers").textContent = data.followers;
            document.getElementById("following").textContent = data.following;
        });

});