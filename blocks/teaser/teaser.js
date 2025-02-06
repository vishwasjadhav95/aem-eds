export default function decorate(block) {
  const classNames = ['cmp-teaser-content', 'cmp-teaser-image', 'cmp-teaser-details'];
  [...block.children].forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      row.classList.add(classNames[0]);
    }
    [...row.children].forEach((col, colIndex) => {
      if (colIndex === 0) {
        col.classList.add(classNames[1]);
      } else if (colIndex === 1) {
        col.classList.add(classNames[2]);
        }
      });
    });
  }
