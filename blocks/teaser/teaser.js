export default function decorate(block) {
  const classNames = ['cmp-teaser-content', 'cmp-teaser-image', 'cmp-teaser-details'];
  [...block.children].forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      row.classList.add(classNames[0]);
    }
    [...row.children].forEach((col) => {
      if (col.querySelector('picture')) {
        col.classList.add(classNames[1]);
      } else {
        col.classList.add(classNames[2]);
        const buttonContainers = col.querySelectorAll('.button-container');
        if (buttonContainers.length > 0) {
          const newDiv = document.createElement('div');
          newDiv.classList.add('btn-list');
          buttonContainers.forEach((buttonContainer) => {
            newDiv.appendChild(buttonContainer);
          });
          col.appendChild(newDiv);
        }
      }
    });
  });
}
