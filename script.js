document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.intro__form');
    const inputs = document.querySelectorAll('.intro__input');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        let hasError = false; 
        
        inputs.forEach(input => {
            const errorMessage = document.getElementById(`${input.id}Error`);
            const errorIcon = input.nextElementSibling; 

            if (input.type === "email") {
                if (!emailPattern.test(input.value.trim()) || input.value.trim() === "") { 
                    errorMessage.classList.add('show'); 
                    errorIcon.classList.add('show'); 
                    hasError = true; 
                } else {
                    errorMessage.classList.remove('show'); 
                    errorIcon.classList.remove('show'); 
                }
            } else {

                if (input.value.trim() === "") { 
                    errorMessage.classList.add('show'); 
                    errorIcon.classList.add('show'); 
                    hasError = true; 
                } else {
                    errorMessage.classList.remove('show'); 
                    errorIcon.classList.remove('show'); 
                }
            }
        });

        if (!hasError) {
            console.log("Форма успешно отправлена!"); 
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorMessage = document.getElementById(`${input.id}Error`);
            const errorIcon = input.nextElementSibling;

            errorMessage.classList.remove('show'); 
            errorIcon.classList.remove('show'); 
        });
    });
});
