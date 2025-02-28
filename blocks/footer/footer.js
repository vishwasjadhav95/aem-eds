import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta
    ? new URL(footerMeta, window.location).pathname
    : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  footer.classList.add('cmp-footer');
  while (fragment.firstElementChild) {
    footer.append(fragment.firstElementChild);
  }

  const defaultContentWrappers = footer.querySelectorAll('.default-content-wrapper');
  defaultContentWrappers.forEach((wrapper, index) => {
    if (index === 0) {
      wrapper.classList.add('cmp-upperheader');
    } else if (index === 1) {
      wrapper.classList.add('cmp-middleheader');

      // Wrap the first p tag in one div and the remaining p tags in another div
      const pTags = wrapper.querySelectorAll('p');
      if (pTags.length > 0) {
        const firstDiv = document.createElement('div');
        firstDiv.classList.add('footer-button');
        const secondDiv = document.createElement('div');
        secondDiv.classList.add('footer-brand-info');

        firstDiv.appendChild(pTags[0]);
        for (let i = 1; i < pTags.length; i += 1) {
          secondDiv.appendChild(pTags[i]);
        }

        wrapper.appendChild(firstDiv);
        wrapper.appendChild(secondDiv);
      }
    } else if (index === 2) {
      wrapper.classList.add('cmp-lowerheader');

      // Wrap the first p tag in one div, the second p tag in another div, and the ul in another div
      const lowerPtags = wrapper.querySelectorAll('p');
      const ulTag = wrapper.querySelector('ul');
      if (lowerPtags.length > 0 && ulTag) {
        const firstDiv = document.createElement('div');
        firstDiv.classList.add('footer-lowerheader-title');
        const secondDiv = document.createElement('div');
        secondDiv.classList.add('footer-lowerheader-details');
        const thirdDiv = document.createElement('div');
        thirdDiv.classList.add('footer-lowerheader-links');

        firstDiv.appendChild(lowerPtags[0]);
        secondDiv.appendChild(lowerPtags[1]);
        thirdDiv.appendChild(ulTag);

        wrapper.appendChild(firstDiv);
        wrapper.appendChild(secondDiv);
        wrapper.appendChild(thirdDiv);
      }
      // Wrap the first p tag in one div and the remaining p tags in another div
      const brandInfo = footer.querySelector('.footer-brand-info');
      if (brandInfo) {
        const pTags = brandInfo.querySelectorAll('p');
        if (pTags.length > 0) {
          const firstDiv = document.createElement('div');
          firstDiv.classList.add('footer-brand-logo');
          const secondDiv = document.createElement('div');
          secondDiv.classList.add('footer-brand-infoname');

          firstDiv.appendChild(pTags[0]);
          for (let i = 1; i < pTags.length; i += 1) {
            secondDiv.appendChild(pTags[i]);
          }

          brandInfo.appendChild(firstDiv);
          brandInfo.appendChild(secondDiv);
        }
      }
    }
  });

  block.append(footer);
}
