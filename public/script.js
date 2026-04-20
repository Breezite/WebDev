async function loadFighters(){
    const table = document.getElementById('fightersTable');

    table.innerHTML='<tr><td>Boo</td></tr>';
    try{
        const response = await fetch('/api/fighters');
        const data = await response.json();
        console.log("Succesfully fetched: ", data);
        table.innerHTML='';
        data.items.forEach(fighter =>{
            const row = document.createElement('tr')
            row.innerHTML=`
                <td>${fighter.ranking ?? '-'}</td>
                <td>${fighter.fullName}</td>
                <td>${fighter.country}</td>
            `;
            table.appendChild(row);
        });
    }
    catch (error){
        console.error(error);
    }
}

loadFighters()