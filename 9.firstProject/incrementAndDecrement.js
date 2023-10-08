let countValue = document.querySelector('#number');

// console.log(countValue);

const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    console.log(value);
    // Update the value
    value = value - 1;
    // set the value onto UI
    countValue.innerText = value;
};

const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value;
};


// 52 min