async function loadFighters(){
    try{
        const response = await fetch('/api/fighters')
        const data = await response.json()

        const table = document.getElementById('fightersTable')
        table.innerHTML=''

        data.items.forEach(fighter =>{
            const row = document.createElement('tr')
            row.innerHTML=`
                <td>${fighter.ranking ?? '-'}</td>
                <td>${fighter.fullName}</td>
                <td>${fighter.country}</td>
            `
            table.appendChild(row)
        })
    }
    catch (error){
        console.error('Error occured: ', error)
    }
}
loadFighters()