document.addEventListener('DOMContentLoaded', ()=> {
    const carsLink = document.getElementById('cars-link')
    const catalogSection = document.getElementById('catalog');

    if (carsLink && catalogSection){
        carsLink.addEventListener('click', function(event){
            event.preventDefault();
            catalogSection.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        
        });
    }
});