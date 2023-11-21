let container = document.querySelector('.container');
let msg = document.querySelector('.massage');

let searchUser = document.querySelector('.search input');
let userName = "";
searchUser.addEventListener('input', () => {
    userName = searchUser.value;
});
let body = document.querySelector('body')
let searchBtn = document.querySelector('.search Button');
searchBtn.addEventListener('click', () => {
    loadGitHubApi(userName);
    msg.style.display = 'none';
    body.style.backdropFilter = 'blur(10px)';
});

async function loadGitHubApi(name) {
    let gitApi = await fetch(`https://api.github.com/users/${name} `);
    let resData = await gitApi.json();
    console.log(resData.avatar_url);
    let card = document.createElement('div');
    card.classList.add('user-card');
    let card_details =
        `
    <div class="head d-flex center">
     <img src=${resData.avatar_url} alt="null" class="photo">
     <div class="d-flex between w-100 sub">
    <div>
        <h1 class="name fw-bold">${resData.login}</h1>
        <a href=${resData.url} class="username" target="_blank">@${resData.name}</a>
        <a  class="username" target="_blank">@${resData.company}</a>
        
    </div>
    <p class="joined">Joined At GitHub</p>
    <p class="joined">${resData.created_at}</p>
     </div>
     </div>
<div class="details">
  <p class="bio">${resData.bio}</p>
  <div>
<ul class="card d-flex between center">
    <li>
        <h6 class="mb-5">Repos</h6>
        <span class="fw-bold">${resData.public_repos}</span>
    </li>
    <li>
        <h6 class="mb-5">Followers</h6>
        <span class="fw-bold">${resData.followers}</span>
    </li>
    <li>
        <h6 class="mb-5">Following</h6>
        <span class="fw-bold">${resData.following}</span>
    </li>
</ul>
<div class="links d-flex between">
    <ul>
        <li>
        <span class="material-symbols-outlined">
        location_on
        </span>
        </li>
        <li>
            <span class="add">${resData.location}</span>
        </li>
    </ul>
    <ul>
        <li>
        <span class="material-symbols-outlined">
        diversity_3
        </span>
        </li>
        <li>
            <span class="org">${resData.company}</span>
        </li>
    </ul>
</div>
</div>
</div>`;
    card.innerHTML = card_details;
    if(container.className=="user-card"){
       
    }else{
        container.appendChild(card);
    }


}


