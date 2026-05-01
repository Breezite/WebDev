let allFighters = []; 

async function loadFighters(){
    const container = document.getElementById('tablesContainer');
    container.innerHTML = '<p>Loading athletes...</p>';
    
    try {
        const response = await fetch('/api/fighters');
        const data = await response.json();

        allFighters = data.items;

        const cat = new URLSearchParams(window.location.search);
        const category = cat.get('category');

        filterFighters(category);   
        

    } catch (error) {
        console.log(error);
        container.innerHTML = '<p>Error loading athletes.</p>';
    }
}


function filterFighters(selectedCategory) {
    const container = document.getElementById('tablesContainer');
    container.innerHTML = '';

    const filtered = allFighters.filter(fighter => {
        return fighter.category && fighter.category.includes(selectedCategory);
    });

    const grouped = {};
    filtered.forEach(fighter => {
        const weight = fighter.weightClass;
        if (!grouped[weight]) {
            grouped[weight] = [];
        }
        grouped[weight].push(fighter);
    });

    for (const weightClass in grouped) {
        const fighterofClass = grouped[weightClass];
        
        const together=document.createElement('div');
        together.id='together';

        const title = document.createElement('h2');
        title.textContent = weightClass;
        together.appendChild(title);

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Profile</th>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody></tbody>
        `;
        const tbody = table.querySelector('tbody');

        fighterofClass.forEach(fighter => {
            const row = document.createElement('tr');
            const pImg = fighter.bodyImage?.url ? `<img src="${fighter.bodyImage.url}" alt="${fighter.fullName}" id="profileImg">` : '-';

            row.innerHTML = `
                <td id="pImg">${pImg}</td>
                <td>${fighter.ranking ?? '-'}</td>
                <td>${fighter.fullName}</td>
                <td>${fighter.weightClass}</td>
            `;
            tbody.appendChild(row);
        });
        together.appendChild(table);
        container.appendChild(together);
    }

    if (Object.keys(grouped).length === 0) {
        container.innerHTML = `<p>No athletes found for ${selectedCategory}</p>`;
    } 
}

document.addEventListener('DOMContentLoaded', loadFighters);