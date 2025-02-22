export default function decorate(block) {
    const wrapper = document.createElement('div');
    wrapper.className = 'herocarousel-wrapper';
  
    [...block.children].forEach((row) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'herocarousel';
  
      const imageContainer = row.children[0];
      const textContainer = row.children[1];
  
      carouselItem.appendChild(imageContainer);
      carouselItem.appendChild(textContainer);
  
      wrapper.appendChild(carouselItem);
    });
  
    block.innerHTML = '';
    block.appendChild(wrapper);
  
    // Optional: Add navigation buttons or auto-slide functionality here
  }