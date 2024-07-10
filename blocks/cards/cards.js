
export default function decorate(block) {
  const cards = block.querySelectorAll('.cards > div');

  cards.forEach((card) => {
    card.classList.add('card');
    const picture = card.querySelector('picture');
    const category = card.querySelectorAll('p')[0];
    const description = card.querySelectorAll('p')[1];
    const linkContainer = card.querySelector('p:last-child');
    const link = linkContainer.querySelector('a');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('card-image');
    imgContainer.appendChild(picture);

    const textContainer = document.createElement('div');
    textContainer.classList.add('card-text');
    textContainer.appendChild(category);
    textContainer.appendChild(description);
    textContainer.appendChild(linkContainer);

    link.classList.add('card-link');

    card.innerHTML = '';
    card.appendChild(imgContainer);
    card.appendChild(textContainer);
  });
}
