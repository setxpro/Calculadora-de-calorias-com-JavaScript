//pega a referencia dentro da dom 
const form = document.getElementById('form');

//toda vez que esse forme der um submit
//função que vai ser executada toda vez que o evento acontecer
//recebe o "event" como parametro 

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

    //previne o comportamento padrão do JS do evento "submit" cancelando o refresh
    event.preventDefault();

    const gender = getSelectedValue('gender');

    //pega o valor que o usuário digita no imput vindo da função como numero
    const age = getNumberValue('age');  
    const weight = getNumberValue('weight');  
    const height = getNumberValue('height');  
    const activityLevel = getSelectedValue('activity_level');
    
    //calculo

   //calc metabolismo 
    const tmb = Math.round(
    
        gender === 'female'
          ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
          : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))

    );
    //Quanto precisa consimir para manter o peso
    const maintenance = Math.round((tmb * Number(activityLevel))) //Math.round => arredonda o valor
    
    //para perder peso
    const loseWeihgt =  maintenance - 450;

    //Para ganhar peso
    const gainWeihgt =  maintenance + 450;


    const layout = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeihgt} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeihgt} calorias</strong>.
        </li>
      </ul>
    </div>
    `;

    const result = document.getElementById('result');

    //no HTML vai preencher com a "const layout"
    result.innerHTML = layout;

}

    //pegar os valores do campo Select
    function getSelectedValue(id) {
        const select = document.getElementById(id)    

        //option sexo selecionando por item do array    
        return select.options[select.selectedIndex].value; 

    }


     //recebe a informação como numero
function getNumberValue(id) {
    return Number(document.getElementById(id).value);  
}