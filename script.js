const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    e.preventDefault() //as we dont want t submit the form therefore we are preventing the default behaviour of the form that is we are preventing it 
    //now we want to get the values of the height and weight 
    const height = parseInt(document.querySelector('#height').value)  //as we want to get the value of the height entered by the user we are doing this
    //pareseint is used to convert the string into the number
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if((height === '' || height < 0 || isNaN(height)) && (weight === '' || weight < 0 || isNaN(weight))) {
        result.innerHTML = "Please enter the valid values"
    }
    else{
        //result.innerHTML = `The BMI is ${((weight / ((height * height) / 10000)).toFixed(2))}`
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if(bmi < 18.5){
            result.innerHTML = `The BMI is ${bmi}.Oops!! You are underweight`
        }
        else if(bmi > 18.5 && bmi <= 24.9){
            result.innerHTML = `The BMI is ${bmi}.Congratulations!! You are normal`
        }
        else{
            result.innerHTML = `The BMI is ${bmi}.Oops!! You are overweight`
        }
        
        result.style.color = "blue";
        result.style.fontSize = "20px";
    }

})