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

const fileInput = document.getElementById('pic');
const previewPic = document.getElementById('previewPic');
   
if(fileInput && previewPic){
    fileInput.addEventListener('change', function() {
        const file = this.files[0]; 
        
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                previewPic.src = e.target.result;
                previewPic.style.display = 'block'; 
            };
            reader.readAsDataURL(file);
        }
        else {
            previewPic.style.display = 'none';
            previewPic.src = '';
        }
    });
}

function saveProfile(event){
    event.preventDefault();

    const checkedCat=Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb =>cb.value);
    const file=document.getElementById('pic').files[0];
    const save=(imageBase64)=>{
        const user = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            weight: document.getElementById('weight').value,
            height: document.getElementById('height').value,
            nationality: document.getElementById('nationality').value,
            gender: document.getElementById('gender').value,
            category: checkedCat.join(', '),
            grade: document.getElementById('grade').value,
            pic:imageBase64
        };
        localStorage.setItem('userProfile', JSON.stringify(user));
        loadProfile();
    }
        


    if(file){
        const reader=new FileReader();
        reader.onload=function(e){
            save(e.target.result);
        };
        reader.readAsDataURL(file);
    }
    else{
        const exists=JSON.parse(localStorage.getItem('user'))||{};

        if(exists){
            const data =JSON.parse(exists);
            save(data.pic||'');
        }
        else{
            save('');
        }
    }
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

        if(document.getElementById('dispPic')){
            if(user.pic){
                dispPic.src=user.pic;
                dispPic.style.display='inline-block';
            }
            else{
                dispPic.style.display='none';
            }
        }
        if(formView) formView.style.display='none';
        if(displayView) displayView.style.display='grid';

    }
    else{
        if(formView) formView.style.display='block';
        if(displayView) displayView.style.display='none';
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

        document.querySelectorAll('input[name="category"]').forEach(cb => cb.checked =false);
        if(user.category){
            const savedCats =user.category.split(', ');
            document.querySelectorAll('input[name="category"]').forEach(cb=>{
                if(savedCats.includes(cb.value)){
                    cb.checked=true;
                }
            });
        }

        if (document.getElementById('grade')) document.getElementById('grade').value = user.grade || '';

        const previewPic = document.getElementById('previewPic');
        if(previewPic){
            if(user.pic){
                previewPic.src=user.pic;
                previewPic.style.display='block';
            }
            else{
                previewPic.style.display='none';
            }
        }
    }
    displayView.style.display='none';
    formView.style.display='block';
}