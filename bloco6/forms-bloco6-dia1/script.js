function handleSubmit(event) {
    event.preventDefault();
  }

  //Concorda que queremos que o botão esteja preparado para funcionar assim que abrirmos 
  //a página? Para isso colocaremos então o addEventListener dentro do window.onload.
  
  window.onload = function () {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
  };

  //4. Crie um botão que limpe as informações contidas nos campos;
  function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

  window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
   const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
  };
