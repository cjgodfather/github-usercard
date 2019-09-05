/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/cjgodfather")
  .then(response => userCreator(response.data))
  .then(user => card.appendChild(user))
  .catch(error => console.log("something went wrong"));

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function userCreator(obj) {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const cardIntoEl = document.createElement("div");
  const userNameEl = document.createElement("h3");
  const pUsernameEl = document.createElement("p");
  const pLocationEl = document.createElement("p");
  const pProfileEl = document.createElement("p");
  const aEl = document.createElement("a");
  const pFollowerEl = document.createElement("p");
  const pFollowingEl = document.createElement("p");
  const pBioEl = document.createElement("p");

  cardEl.classList.add("card");
  cardIntoEl.classList.add("card-info");
  userNameEl.classList.add("name");
  pUsernameEl.classList.add("username");

  imgEl.src = obj.avatar_url;
  userNameEl.textContent = obj.name;
  pUsernameEl.textContent = obj.login;
  pLocationEl.textContent = obj.location;
  pProfileEl.textContent = `Profile:`;
  aEl.href = obj.url;
  aEl.textContent = obj.url;
  pFollowerEl.textContent = `Followers:${obj.followers}`;
  pFollowingEl.textContent = `Following:${obj.following}`;
  pBioEl.textContent = `Bio:${obj.bio}`;

  cardEl.appendChild(imgEl);
  cardEl.appendChild(cardIntoEl);
  cardIntoEl.appendChild(userNameEl);
  cardIntoEl.appendChild(pUsernameEl);
  cardIntoEl.appendChild(pLocationEl);
  cardIntoEl.appendChild(pProfileEl);
  pProfileEl.appendChild(aEl);
  cardIntoEl.appendChild(pFollowerEl);
  cardIntoEl.appendChild(pFollowingEl);
  cardIntoEl.appendChild(pBioEl);

  return cardEl;
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const card = document.querySelector(".cards");

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray.forEach(follower => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then(response => userCreator(response.data))
    .then(user => card.appendChild(user))
    .catch(error => console.log("something went wrong"));
});

// followers

// axios
//   .get(`https://api.github.com/users/cjgodfather/followers`)
//   .then(response => response.data)
//   .then(followers =>
//     followers.forEach(follower => {
//       const newCard = userCreator(follower);
//       card.appendChild(newCard);
//     })
//   );

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
