export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
    const classesToAdd = ['cmp-infotwocard', 'cmp-maininfotwocard'];
    const divs = row.querySelectorAll('div');
    divs.forEach((div) => {
      div.classList.add(classesToAdd[0]);
    });
    const maindivs = block.querySelectorAll('div')[0];
    if (maindivs) {
      maindivs.classList.add(classesToAdd[1]);
    }
  });
}
