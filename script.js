//////////////////////////////////////CAD risk Score

var score, age, chestPain, familyCAD, diabetes, dyslipid, aorticValve, rheumatic, risk;

function update() {
    
    //1. Receive data from html
    age = document.getElementById("age").value;
    chestPain = document.getElementById("chestPain").value;
    familyCAD = document.getElementById("familyCAD").checked;
    diabetes = document.getElementById("diabetes").checked;
    dyslipid = document.getElementById("dyslipid").checked;
    aorticValve = document.getElementById("aorticValve").checked;
    rheumatic = document.getElementById("rheumatic").checked;

    //2. Score evaluation
    score = 0;
    score = score + age;



    if (chestPain == 1) {
        score = score + 11.5;
    } else if (chestPain == 2 ) {
        score = score + 22;
    };
    

    if (familyCAD == true){
        score = score + 41.5;
    };

    if (diabetes == true){
        score = score + 22.5;
    };

    if (dyslipid == true){
        score = score + 19;
    };

    if (aorticValve == true){
        score = score - 23;
    };

    if (rheumatic == true){
        score = score - 36.5;
    };

    //3.Cut off

    if (score < 61.75){
        risk = 'low';
    } else if (score >= 61.75){
        risk = 'high';
    }
    
    document.getElementById("score").innerHTML = "Simplified score for concomitant CAD prediction = " + score;
    document.getElementById("risk").innerHTML = "Patients would be defined as " + risk +"-risk for CAD";
};