'use strict';

const getWeather = async () => {
    
    const baseApiUrl = 'https://danepubliczne.imgw.pl/api/data/synop';
    
    try {
        
        const response = await fetch(baseApiUrl);
        const data = await response.json();
        return data;
        
    } catch(err) {
        console.error(err);
    }
    
}

getWeather().then(data => {
    
    const select = document.querySelector('#weatherCity');
    
    const tbody = document.querySelector('tbody');

   

    data.forEach(element => {

        const option = document.createElement('option');
        option.text = element.stacja.toUpperCase();
        option.value = element.stacja;
        select.appendChild(option);

    });

    select.addEventListener('change', () => {

       

        const selectedCity = select.selectedIndex - 1;

      

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${data[selectedCity].stacja}</td>
            <td>${data[selectedCity].data_pomiaru}</td>
            <td>${data[selectedCity].godzina_pomiaru}</td>
            <td>${data[selectedCity].temperatura}</td>
            <td>${data[selectedCity].suma_opadu}</td>
            <td>${data[selectedCity].cisnienie}</td>
        `;
        tbody.appendChild(tr);

    });
});