// write your code here

// See all ramen images in the `div` with the id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an `img` tag inside the `#ramen-menu` div.

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    imgLoad();
    
})

// find where ramen images need to show up
const ramenMenu = document.querySelector('#ramen-menu');

// GET all our ramen - parse to JSON
function imgLoad() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramenData => {
        // console.log(ramenData);
        // set up parameters for 'forEach' 
        ramenData.forEach(eachRamen => {
            
            // pass into a new function
            renderRamen(eachRamen);
            updateDetail(ramenData[0]);

        })
    })
}

// create images for each ramen by getting the direct source
function renderRamen(eachRamen) {
    const img = document.createElement('img');
    img.src = eachRamen.image;
    img.alt = eachRamen.name;
    img.id = eachRamen.id;

    // attach listener to every image that is made in renderRamen()
    img.addEventListener('click', (e) => {
        // console.log(e.target.src)
        updateDetail(eachRamen);
    })

    const midImg = document.querySelector('#ramen-detail');

    // append ramen images to the website
    ramenMenu.appendChild(img);
}                

// Click on an image from the `#ramen-menu` div and see all the info about that ramen displayed inside the `#ramen-detail` div and where it says `insert comment here` and `insert rating here`.

// grab all ramen detail DOM Elements - add the event listener to each menu item: Name, Restaurant, Image, Rating, Comment
const ramenDetail = document.querySelector('#ramen-detail');
const ramenName = document.querySelector('h2.name');
const ramenRestaurant = document.querySelector('h3.restaurant');
const ramenDetailImage = document.querySelector('img');
const rating = document.querySelector('#rating-display');
const comment = document.querySelector('#comment-display');

// create function to update details
function updateDetail(eachRamen) {

    let midImg = document.querySelector('#ramen-detail');
    // console.log(eachRamen.target.src)
    midImg.src = eachRamen.image;

    ramenName.innerText = eachRamen.name;
    ramenRestaurant.innerText = eachRamen.restaurant;
    ramenDetailImage.src = eachRamen.image;
    ramenDetailImage.alt = eachRamen.name;
    rating.innerText = eachRamen.rating;
    comment.innerText = eachRamen.comment;

}

// Create a new ramen after submitting the `new-ramen` form. The new ramen should be added to the`#ramen-menu` div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

const getRamen = id => {
    fetch('http://localhost:3000/ramens/' + id)
    .then(response => response.json())
    .then(ramen => {
        console.log(ramen);
        updateDetail(ramen);
    })
}


