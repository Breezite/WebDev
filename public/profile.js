document.addEventListener('DOMContentLoaded', ()=>{
    loadProfile();
    const profile=document.getElementById('profileForm');
    if(profile){
        profile.addEventListener('submit', saveProfile);
    }
    const editBtn=document.getElementById('editBtn');
    if(editBtn){
        editBtn.addEventListener('click', showForm);
    }
});

function saveProfile(event){
    event.preventDefault();

    const checkedCat=Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb =>cb.value);
    const user = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value,
        nationality: document.getElementById('nationality').value,
        gender: document.getElementById('gender').value,
        category: checkedCat.join(', '),
        grade: document.getElementById('grade').value,
    };
    
    localStorage.setItem('userProfile', JSON.stringify(user));
    loadProfile();
}

function loadProfile(){
    const savedData=localStorage.getItem('userProfile');
    const formView=document.getElementById('profileForm');
    const displayView=document.getElementById('profileDisplay');

    if(savedData){
        const user= JSON.parse(savedData);

        if (document.getElementById('dispName')) document.getElementById('dispName').textContent = user.name || '-';
        if (document.getElementById('dispSurname')) document.getElementById('dispSurname').textContent = user.surname || '-';
        if (document.getElementById('dispWeight')) document.getElementById('dispWeight').textContent = user.weight || '-';
        if (document.getElementById('dispHeight')) document.getElementById('dispHeight').textContent = user.height || '-';
        if (document.getElementById('dispNationality')) document.getElementById('dispNationality').textContent = user.nationality || '-';
        if (document.getElementById('dispGender')) document.getElementById('dispGender').textContent = user.gender || '-';
        if (document.getElementById('dispCategory')) document.getElementById('dispCategory').textContent = user.category || '-';
        if (document.getElementById('dispGrade')) document.getElementById('dispGrade').textContent = user.grade || '-';

        formView.style.display='none';
        displayView.style.display= 'block';
    }
    else{
        formView.style.display='block';
        displayView.style.display='none';
    }
}

function showForm(){
    const savedData=localStorage.getItem('userProfile');
    const formView=document.getElementById('profileForm');
    const displayView=document.getElementById('profileDisplay');

    if(savedData){
        const user=JSON.parse(savedData);

        if (document.getElementById('name')) document.getElementById('name').value = user.name || '';
        if (document.getElementById('surname')) document.getElementById('surname').value = user.surname || '';
        if (document.getElementById('weight')) document.getElementById('weight').value = user.weight || '';
        if (document.getElementById('height')) document.getElementById('height').value = user.height || '';
        if (document.getElementById('nationality')) document.getElementById('nationality').value = user.nationality || '';
        if (document.getElementById('gender')) document.getElementById('gender').value = user.gender || '';

        document.querySelectorAll('input[name="categpry"]').forEach(cb => cb.value =false);
        if(user.category){
            const savedCats =user.category.split(', ');
            document.querySelectorAll('input[name="category"]').forEach(cb=>{
                if(savedCats.includes(cb.value)){
                    cb.checked=true;
                }
            });
        }

        if (document.getElementById('grade')) document.getElementById('grade').value = user.grade || '';
    }
    displayView.style.display='none';
    formView.style.display='block';
}