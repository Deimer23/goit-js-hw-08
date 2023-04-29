// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Additional styles import

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createGallery());

function createGallery(){
    let insertGallery = "";
    for (const gallery of galleryItems) {
        insertGallery += `<li class="gallery__item">
                            <a class="gallery__link" href="${gallery.original}">
                                <img class="gallery__image" src="${gallery.preview}" 
                                     alt="${gallery.description}" 
                                     data-source="${gallery.original}"                                     
                                />
                            </a>
                          </li>`;
    }    
    return insertGallery;
}

let lightbox = new SimpleLightbox('.gallery a', {captionDelay:250, captionsData:'alt',});