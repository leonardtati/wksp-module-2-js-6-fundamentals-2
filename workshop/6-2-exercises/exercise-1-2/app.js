// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)


const getBtn = document.getElementById('btn-list');

for(let i = 0; i<5; i++){
    const firstBtns = document.getElementById(`btn-${i}`);

    firstBtns.style.opacity = '50';
    firstBtns.style.backgroundColor = 'gold';
}

const toggleColors = function(i,color){
    const BtnElement = document.getElementById(i);
    const firstColor = BtnElement.style.backgroundColor;

    if (firstColor === 'gold'){
        BtnElement.style.backgroundColor = color;
    }
    else{
        BtnElement.style.backgroundColor = 'gold';
    }
}

const handleClick = function (event){
    const btnId = event.target.id;
    const element = document.getElementById(btnId);
    switch(btnId){
        case 'btn-1':
            if (element.style.opacity === '50'){
                BtnElement.style.opacity = '0';
            }
            else{
                BtnElement.style.opacity = '50';
            }
        break;
        case 'btn-2':
            toggleColor(btnId, 'crimson');
        break;
        case 'btn-3':
        toggleColor(btnId,'lighblue');
        break;
        case 'btn-4':
        btnElement.classList.toggleColor('jitters');
        break;
        default :
        break;

    }

    btnList.removeEventListener('click', handleClick)
}




getBtn.addEventListener('click', handleClick)