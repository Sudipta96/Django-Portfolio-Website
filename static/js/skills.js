// skill, training, education section


const skillBtn = document.getElementById('skills-btn');
const trainBtn = document.getElementById('training-btn');
const eduBtn = document.getElementById('education-btn');

const skill = document.getElementById('skill');
const train = document.getElementById('training');
const edu = document.getElementById('education');

skillBtn.addEventListener('click', function() {
    if(skill.classList.contains("d-none")){
        skill.classList.remove('d-none');
    }
    if(train.classList.contains("d-none") === false){
        train.classList.add('d-none');
    }
    if(edu.classList.contains("d-none") === false){
        edu.classList.add('d-none');
    }

    // changing-color
    if(skillBtn.classList.contains("active-color") === false){
        skillBtn.classList.add('active-color');
    }
    if(trainBtn.classList.contains("active-color") === true){
        trainBtn.classList.remove('active-color');
    }
    if(eduBtn.classList.contains("active-color") === true){
        eduBtn.classList.remove('active-color');
    }


})

trainBtn.addEventListener('click', () => {

    if(train.classList.contains("d-none")){
        train.classList.remove('d-none');
    }
    if(skill.classList.contains("d-none") === false){
        skill.classList.add('d-none');
    }
    if(edu.classList.contains("d-none") === false){
        edu.classList.add('d-none');
    }

    // changing-color
    if(skillBtn.classList.contains("active-color") === true){
        skillBtn.classList.remove('active-color');
    }
    if(trainBtn.classList.contains("active-color") === false){
        trainBtn.classList.add('active-color');
    }
    if(eduBtn.classList.contains("active-color") === true){
        eduBtn.classList.remove('active-color');
    }

})

eduBtn.addEventListener('click', () => {

    if(edu.classList.contains("d-none")){
        edu.classList.remove('d-none');
    }
    if(skill.classList.contains("d-none") === false){
        skill.classList.add('d-none');
    }
    if(train.classList.contains("d-none") === false){
        train.classList.add('d-none');
    }

    // changing color
    if(skillBtn.classList.contains("active-color") === true){
        skillBtn.classList.remove('active-color');
    }
    if(trainBtn.classList.contains("active-color") === true){
        trainBtn.classList.remove('active-color');
    }
    if(eduBtn.classList.contains("active-color") === false){
        eduBtn.classList.add('active-color');
    }

})


// end of skill, training, education section
