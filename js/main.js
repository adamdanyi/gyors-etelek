const menuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});




const filterBtns = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.recipe-card');


    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');


            const filterValue = btn.getAttribute('data-filter');


            recipeCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    card.classList.add('hide');
                    card.classList.remove('show');
                }
            });
        });
    });

const recipeModal = document.getElementById('recipe-modal');
const closeModalBtn = document.querySelector('.modal-close');
const servingsInput = document.getElementById('servings-input');
const incBtn = document.getElementById('inc-servings');
const decBtn = document.getElementById('dec-servings');

let currentRecipeId = null; 


recipeCards.forEach(card => {
    card.addEventListener('click', () => {

        const recipeId = card.getAttribute('data-id');
        

        if (recipeId && recipeDatabase[recipeId]) {
            currentRecipeId = recipeId;
            const data = recipeDatabase[recipeId];


            document.getElementById('modal-title').innerText = data.title;
            

            const stepsList = document.getElementById('modal-steps');
            stepsList.innerHTML = data.steps.map(step => `<li>${step}</li>`).join('');


            servingsInput.value = data.baseServings;
            updateCalculator(currentRecipeId, data.baseServings); 

  
            recipeModal.classList.add('open');
            document.body.style.overflow = 'hidden'; 
        }
    });
});


if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        recipeModal.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
}


window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});


if (servingsInput) {

    servingsInput.addEventListener('input', (e) => {
        if (currentRecipeId && e.target.value > 0 ) {
            updateCalculator(currentRecipeId, e.target.value);
        }
    });


    incBtn.addEventListener('click', () => {
        if (servingsInput.value < 10){
        servingsInput.value = parseInt(servingsInput.value) + 1;
        updateCalculator(currentRecipeId, servingsInput.value);
        }
    });


    decBtn.addEventListener('click', () => {
        if (servingsInput.value > 1) {
            servingsInput.value = parseInt(servingsInput.value) - 1;
            updateCalculator(currentRecipeId, servingsInput.value);
}
    });
}