
    let sidemenu=document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
      sidemenu.style.right="-200px";
    }

    let form =document.getElementById('form-submit');
    form.addEventListener( "submit",e=>{
        e.preventDefault();
        fetch(form.action,{
            method:"POST",
            body: new FormData(document.getElementById("form-submit")),

        }).then(
            response=> response.json()
        ).then((html)=>{
            alert('Submitted !! Thank You   ' + document.getElementById('uname').value)
            window.location.href='';
            location.reload();
        });
    });
 
    let active1=document.querySelector('.knowledge');
    let active2 =document.querySelector('.experiences')
    let skill= document.querySelector('.active');

        let experiences=document.querySelector('.Experience');
        let education= document.querySelector('.Education');
let skills = document.querySelector('.skills')
        active1.addEventListener('mouseover',()=>{
            education.classList.remove('Education');

        });
        active1.addEventListener('mouseout',()=>{
            education.classList.add('Education');

        });
        active2.addEventListener('mouseover',()=>{
            experiences.classList.remove('Experience');

        });
        active2.addEventListener('mouseout',()=>{
            experiences.classList.add('Experience');

        });
        skill.addEventListener('mouseover',()=>{
            skills.classList.remove('skills');

        });
        skill.addEventListener('mouseout',()=>{
            skills.classList.add('skills');

        });
    