
export default function decorate(block) {
  // Setting up the block structure
  block.classList.add('cards');
  const cardItems = Array.from(block.children);

  cardItems.forEach((item) => {
    item.classList.add('card');
    const [imageWrapper, textWrapper] = item.children;
    imageWrapper.classList.add('card-image');
    textWrapper.classList.add('card-text');

    const [title, description, linkWrapper] = textWrapper.children;
    title.classList.add('card-title');
    description.classList.add('card-description');
    const link = linkWrapper.querySelector('a');
    link.classList.add('card-link');

    // Wrapping the link text in a span for styling
    const linkText = link.innerText;
    link.innerHTML = `<span>${linkText}</span>`;

    // Adding icon to the link
    const icon = document.createElement('span');
    icon.classList.add('card-link-icon');
    icon.innerHTML = '➔'; // Arrow icon
    link.appendChild(icon);
  });
}
