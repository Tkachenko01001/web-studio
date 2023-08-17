const list = document.querySelector(".list");
const listCards = document.querySelector('.list-cards');

const keysArray = Array.from(listCards.children);

const clickFilter = (e) => {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }

    if (e.target.innerText === "Усі") {
        return renderFilteredItems(keysArray);
    }

    const filteredItems = keysArray.filter((item) => item.id === e.target.innerText);
    renderFilteredItems(filteredItems);
};

function renderFilteredItems(filteredItems) {
  listCards.innerHTML = "";

    filteredItems.forEach((item) => {
    listCards.appendChild(item.cloneNode(true));
  });
}

list.addEventListener("click", clickFilter);