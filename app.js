const myLib = (() => {
    let counter = 0;
    let x = document.getElementById('numField1');
    let y = document.getElementById('numField2');
    let result = document.getElementById('resultField');
    let ddm = () => {
        var x = document.getElementById("dropDownClick");
        if (x.className === "topnav") {
            x.className += " responsive";
            //changes navbar to navbar responsive
        }
        else {
            x.className = "topnav";
            /* collapses the responsive navbar */
        }
    }; 

    let resultsArray = [];

    let form = document.getElementById('xIsWhatPercentOfY');
    form.addEventListener('submit', (event) => {

        if(!x.value || !y.value) {
            alert('Please enter a correct value in the input fields!');
        } else {
            let x = parseFloat(numField1.value);
            let y = parseFloat(numField2.value);
            let percentage = x/y * 100;
            resultsArray.push(percentage);
            resultField.innerText = `${x} is ${percentage}% of ${y}`;
            event.preventDefault();
        }

    });

    return {
        numField1 : x,
        numField2 : y,
        resultField : result,
        dropDownMenu : ddm,
        form : form,
        resultsArray : resultsArray,
    };
    
})();



