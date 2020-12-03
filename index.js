// Generate a random image on each refresh
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=pmIDk9zMurKrqusy3MNAuIx-HZ1meRUTIz62jUYaMDg';
const imgElement = document.querySelector('img');
let randomImg = '';

async function getAPhoto() {
  try {
    const response = await fetch(apiUrl);
    randomImg = await response.json();
    displayImage();
  } catch (error) {
    // backup img in case fetch fails
    imgElement.setAttribute('src', );
    imgElement.setAttribute('title', );
    imgElement.setAttribute('alt', );
  }
}

function displayImage() {
  imgElement.setAttribute('src', randomImg.urls.regular);
  imgElement.setAttribute('title', randomImg.alt_description);
  imgElement.setAttribute('alt', randomImg.alt_description);
}

getAPhoto();