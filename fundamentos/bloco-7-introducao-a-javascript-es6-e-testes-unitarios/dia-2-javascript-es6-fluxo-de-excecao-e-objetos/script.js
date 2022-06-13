
   const verifyNumber = () => {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        if (value1 === '' ||  value2 === '') {
          throw new Error('Os dois campos devem ser preenchidos');
        }
      };

    const verifyIsNumber = () => {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        if (isNaN(value1) ||  isNaN(value2)) {
          throw new Error('Os campos devem ser numéricos');
        }
      };
      
    const sum = () => {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        try {
          verifyNumber();
          verifyIsNumber();
          const result = parseInt(value1) + parseInt(value2);
          document.getElementById('result').innerHTML = `Resultado: ${result}`;
          
        } catch (error) {
            document.getElementById('result').innerHTML = error.message;
        } finally {
            document.getElementById('value1').value = '';
            document.getElementById('value2').value = '';
        }
      };
      
       window.onload = () => {
        const button = document.getElementById('button');
        button.addEventListener('click', sum)
      }