export default function decorate(block) {
  [...block.children].forEach((row) => {
    [...row.children].forEach((col, colIndex) => {
      if (colIndex === 0) {
        col.classList.add('cmp-hero-content');
        const classNames = [
          'cmp-herocard-content',
          'cmp-herocard-info',
          'cmphero-icon-container',
          'cmphero-text-container',
        ];
        const firstDiv = document.createElement('div');
        firstDiv.classList.add(classNames[0]);

        const secondDiv = document.createElement('div');
        secondDiv.classList.add(classNames[1]);

        const pTags = [...col.querySelectorAll('p')];

        pTags.slice(0, 4).forEach((pTag, index) => {
          if (index === 0) {
            const h1 = document.createElement('h1');
            const newP = document.createElement('p');
            newP.appendChild(pTag);
            h1.appendChild(newP);
            firstDiv.appendChild(h1);
          } else if (index === 1) {
            firstDiv.querySelector('h1 p').appendChild(pTag);
          } else {
            firstDiv.appendChild(pTag);
          }
        });

        const iconSpan = col.querySelector('span.icon.icon-iconpay');
        iconSpan.remove();
        pTags.slice(4).forEach((pTag) => secondDiv.appendChild(pTag));
        const iconDiv = document.createElement('div');
        iconDiv.classList.add(classNames[2]);
        iconDiv.innerHTML = iconSpan.outerHTML;
        const textDiv = document.createElement('div');
        textDiv.classList.add(classNames[3]);
        const secondDivPTags = [...secondDiv.querySelectorAll('p')];
        secondDivPTags.forEach((pTag) => textDiv.appendChild(pTag));
        secondDiv.innerHTML = '';
        secondDiv.appendChild(iconDiv);
        secondDiv.appendChild(textDiv);

        col.appendChild(firstDiv);
        col.appendChild(secondDiv);
      }
    });
  });
}
