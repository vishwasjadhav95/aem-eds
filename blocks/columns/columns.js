export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  // setup image columns
  [...block.children].forEach((row, rowIndex) => {
    switch (rowIndex) {
      case 0:
        row.classList.add('cmp-infocardtag');
        break;
      case 1:
        row.classList.add('cmp-maininfotwocard');
        break;
      default:
        // No action needed for other cases
        break;
    }
    [...row.children].forEach((col, colIndex) => {
      switch (true) {
        case (colIndex === 0 && rowIndex === 0):
          col.classList.add('cmp-infocardtagtitle');
          break;
        case (rowIndex === 1):
          col.classList.add('cmp-infotwocard');
          break;
        default:
          // No action needed for other cases
          break;
      }
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
