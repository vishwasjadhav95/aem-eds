export default function decorate(block) {
    const rightTeaserBlock = document.querySelector('.teaser.cmp-right-teaser.block');
    console.log(rightTeaserBlock);
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
        }
      });
    });
  }