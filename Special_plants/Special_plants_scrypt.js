function openExternalLink(url) {
    window.open(url, '_blank');
}

function showMorePictures(imagesDirectory) {
    // Get the main element to append images
    const mainElement = document.querySelector('main');

    // Create a container for the additional pictures
    const picturesContainer = document.createElement('div');
    picturesContainer.classList.add('pictures-container');

    // Use a loop to iterate through image files in the directory
    for (let i = 1; i <= 8; i++) { 
        const imgElement = document.createElement('img');
        imgElement.src = `${imagesDirectory}/image${i}.jpeg`; // Adjust the filename pattern as needed
        imgElement.alt = `Additional Image ${i}`;

        // Append each image to the pictures container
        picturesContainer.appendChild(imgElement);
    }

    // Append the pictures container to the main element
    mainElement.appendChild(picturesContainer);
}
