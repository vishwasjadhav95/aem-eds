export default function decorate(block) {
    console.log(block);
    [...block.children].forEach((row) => {
        console.log('row', row);
        
        [...row.children].forEach((col) => {
            console.log('col', col);
            
            const picture = col.querySelector('picture');
            if (picture) {
                const overlayText = document.createElement('div');
                overlayText.className = 'overlay-text';
                overlayText.textContent = 'Overlay Text'; // Change this to the desired text

                const imageContainer = document.createElement('div');
                imageContainer.className = 'image-container';
                picture.parentNode.insertBefore(imageContainer, picture);
                imageContainer.appendChild(picture);
                imageContainer.appendChild(overlayText);
            }
        });
    });
}