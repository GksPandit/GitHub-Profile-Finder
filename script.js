
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const profileCard = document.getElementById("profileCard");

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repo = document.getElementById("repo");
const profileLink = document.getElementById("profileLink");


function searchProfile(){
    console.log("Button Clicked");
    
    const username = searchInput.value.trim();

    if(username === ""){
        alert("Please enter a username");
        return;
    }
    getProfile(username);
}

/*searchBtn.addEventListener("click", searchProfile);

searchInput.addEventListener("keydown", (e) =>{
        if(e.key === "Enter"){
            searchProfile();
        }
    });
*/
searchBtn.addEventListener("click", searchProfile);
searchInput.addEventListener("keydown", (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
        console.log("Enter Pressed");
        searchProfile();
    }
});


 async function getProfile(username){
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    console.log(data.name);
    console.log(data.bio);
    console.log(data.followers);
    console.log(data.public_repos);

avatar.src = data.avatar_url;
name.innerText = data.name;
bio.innerText = data.bio;
followers.innerText = data.followers;
following.innerText =data.following;
repo.innerText = data.public_repos;
profileLink.href = data.html_url;

profileCard.style.display = "block";

}