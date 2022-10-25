function setCardNumbers() {
  const cardNumbInitial = '0000 0000 0000 0000';
  const cardNumbField = document.querySelector('#cardnumb');
  const cardNumbPreview = document.querySelector('.card-numbers');

  cardNumbField.addEventListener('input', (e) => {
  // Function to insert a space every fours digits in the input
  // https://stackoverflow.com/a/29312803

    const { target } = e;
    let position = target.selectionEnd;
    const { length } = target.value;
    target.value = target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);

    // End of stackoverflow

    const field = cardNumbField.value;
    const card = cardNumbPreview.textContent;
    let newCardPreview = '';
    for (let i = 0; i < card.length; i += 1) {
      if (field[i] === undefined) {
        newCardPreview += cardNumbInitial[i];
      } else {
        newCardPreview += field[i];
      }
    }
    cardNumbPreview.textContent = newCardPreview;
  });
}

function app() {
  setCardNumbers();
}

app();
