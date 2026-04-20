async function loadFighters(){
    const table = document.getElementById('fightersTable')
    table.innerHTML='<tr><td>Loading...</td></tr>'
    try{
        const response = await fetch('/api/fighters');
        const data = await response.json();
        console.log(data);
        table.innerHTML='';

        const filtered = data.items.filter(fighter =>{
            return fighter.category && fighter.category.includes("KARATE COMBAT");
        })

        filtered.forEach(fighter =>{
            const row = document.createElement('tr');

            const displayCategory = (fighter.category && fighter.category.length >0)?fighter.category[0]:'-';
            row.innerHTML=`
                <td>${fighter.ranking ?? '-'}</td>
                <td>${fighter.fullName}</td>
                <td>${fighter.weightClass}</td>
            `
            table.appendChild(row)
    });
    }catch (error){
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', loadFighters);