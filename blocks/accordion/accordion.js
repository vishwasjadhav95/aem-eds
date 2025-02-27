export default function decorate(block) {
  // Iterate over each child of the block
  [...block.children].forEach((row, rowIndex) => {
    if (rowIndex === 0) {
      row.classList.add('cmp-accordiontitle');
    }
    if (rowIndex >= 2 && rowIndex <= 5) {
      row.classList.add('cmp-accordioninfo');
    }
    if (row.classList.contains('cmp-accordioninfo')) {
      const divs = row.querySelectorAll('div');
      if (divs.length > 0) {
        divs[0].classList.add('cmp-accordionquestion');
      }
      if (divs.length > 1) {
        divs[1].classList.add('cmp-accordionanswer');
        divs[1].style.display = 'none'; // Ensure the answer is initially hidden
      }
    }
  });

  const divsinfo = document.querySelectorAll('.cmp-accordioninfo');
  if (divsinfo.length >= 4) {
    // Create the first wrapper and append the first two divs
    const wrapper1 = document.createElement('div');
    wrapper1.classList.add('cmp-accordionwrapper');
    divsinfo[0].parentNode.insertBefore(wrapper1, divsinfo[0]);
    wrapper1.appendChild(divsinfo[0]);
    wrapper1.appendChild(divsinfo[1]);

    // Create the second wrapper and append the next two divs
    const wrapper2 = document.createElement('div');
    wrapper2.classList.add('cmp-accordionwrapper');
    divsinfo[2].parentNode.insertBefore(wrapper2, divsinfo[2]);
    wrapper2.appendChild(divsinfo[2]);
    wrapper2.appendChild(divsinfo[3]);
  }

  // Add event listeners to all '.cmp-accordionquestion' elements
  document.querySelectorAll('.cmp-accordionquestion').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      if (answer && answer.classList.contains('cmp-accordionanswer')) {
        answer.classList.toggle('open');
        question.classList.toggle('open');
        answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
      }
    });
  });
}
