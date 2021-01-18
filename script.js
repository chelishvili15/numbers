
let arr = [], ranArr = [1,2,3,4,5,6,7,8,9,10,11];
//shuffle arr
ranArr = ranArr.sort(() => Math.random() - 0.5);
ranArr.push(0); 
console.log(ranArr);
//___________________

function equalArr(ar){
    ar = [...ar];
    ar.unshift(ar[11]);
    ar.pop();
    for (let i in ar){
        if (i != ar[i]){
            return false;
        }   
    }
    return true;
}

function makeArr(){
var obj = document.getElementById('first').childNodes;

arr.push(obj[1]);
arr.push(obj[3]);
arr.push(obj[5]);

obj = document.getElementById('second').childNodes;

arr.push(obj[1]);
arr.push(obj[3]);
arr.push(obj[5]);

obj = document.getElementById('third').childNodes;

arr.push(obj[1]);
arr.push(obj[3]);
arr.push(obj[5]);

obj = document.getElementById('fourth').childNodes;

arr.push(obj[1]);
arr.push(obj[3]);
arr.push(obj[5]);
}

makeArr();

for (let i in ranArr){
    arr[i].innerHTML = ranArr[i];
}

arr[11].innerHTML = '';

for (let i=0; i<12; i++){
    arr[i].addEventListener('click', function(){
        //zemodan kvemot
        if (ranArr[i+3] == 0){
            ranArr[i+3] = ranArr[i];
            ranArr[i] = 0;
            arr[i+3].innerHTML = ranArr[i+3];
            arr[i+3].style.backgroundColor = 'blue';
            arr[i+3].style.color = 'whitesmoke';
            arr[i].style.backgroundColor = 'whitesmoke';
        }
        //___________________
        //kvemodan zemot
        if (ranArr[i-3] == 0){
            ranArr[i-3] = ranArr[i];
            ranArr[i] = 0;
            arr[i-3].innerHTML = ranArr[i-3];
            arr[i-3].style.backgroundColor = 'blue';
            arr[i-3].style.color = 'whitesmoke';
            arr[i].style.backgroundColor = 'whitesmoke';
        }
        //___________________
        //marcxnidan marjvniv
        if (ranArr[i+1] == 0){
            ranArr[i+1] = ranArr[i];
            ranArr[i] = 0;
            arr[i+1].innerHTML = ranArr[i+1];
            arr[i+1].style.backgroundColor = 'blue';
            arr[i+1].style.color = 'whitesmoke';
            arr[i].style.backgroundColor = 'whitesmoke';
        }
        //___________________
        // marjvnidan marcxniv
        if (ranArr[i-1] == 0){
            ranArr[i-1] = ranArr[i];
            ranArr[i] = 0;
            arr[i-1].innerHTML = ranArr[i-1];
            arr[i-1].style.backgroundColor = 'blue';
            arr[i-1].style.color = 'whitesmoke';
            arr[i].style.backgroundColor = 'whitesmoke';
        }
        //___________________
    })
}


    window.addEventListener('keydown', function(){
        for (let i=0; i<12; i++){
            if(ranArr[i] == 0){
                //down arrow
                
                    if (event.keyCode == 40 && i-3>=0){
                        console.log('d');
                        ranArr[i] = ranArr [i-3];
                        ranArr[i-3] = 0;
                        arr[i].innerHTML = ranArr[i];
                        arr[i].style.backgroundColor = 'blue';
                        arr[i].style.color = 'whitesmoke';
                        arr[i-3].style.backgroundColor = 'whitesmoke'; 
                    }
                //___________________  
                // up arrow
                
                if (event.keyCode == 38 && i+3<12){
                        console.log('u');
                        console.log(ranArr);
                        ranArr[i] = ranArr [i+3];
                        ranArr[i+3] = 0;
                        arr[i].innerHTML = ranArr[i];
                        arr[i].style.backgroundColor = 'blue';
                        arr[i].style.color = 'whitesmoke';
                        arr[i+3].style.backgroundColor = 'whitesmoke'; 
                        break;
                    }
                // ______________________
                // left arrow
                if (event.keyCode == 37 && i+1<12 && i%3 !=2){
                        console.log('l');
                        ranArr[i] = ranArr [i+1];
                        ranArr[i+1] = 0;
                        arr[i].innerHTML = ranArr[i];
                        arr[i].style.backgroundColor = 'blue';
                        arr[i].style.color = 'whitesmoke';
                        arr[i+1].style.backgroundColor = 'whitesmoke'; 
                        break;
                    }
                // ______________________
                // right arrow
                if (event.keyCode == 39 && i-1>=0 && i%3 !=0 ){
                        console.log('r');
                        event.stopPropagation();
                        console.log(ranArr);
                        ranArr[i] = ranArr [i-1];
                        ranArr[i-1] = 0;
                        arr[i].innerHTML = ranArr[i];
                        arr[i].style.backgroundColor = 'blue';
                        arr[i].style.color = 'whitesmoke';
                        arr[i-1].style.backgroundColor = 'whitesmoke'; 
                        break;
                    }
                // _______________________
            }
        }
    })

    if (equalArr(ranArr)){
            console.log(equalArr(ranArr));
            ranArr = [];
            for (let i in arr){
                arr[i].style.backgroundColor = 'whitesmoke';
                arr[i].style.color = 'red';
                arr[11].innerHTML = '';
    }
                addEventListener('keydown', function(){
                    if (event.keyCode == 13){
                        ranArr = [1,2,3,4,5,6,7,8,9,10,11];
                        ranArr = ranArr.sort(() => Math.random() - 0.5);
                        ranArr.push(0);
                        console.log('da');

                        for (let i=0; i<11; i++){
                            arr[i].style.backgroundColor = 'blue';
                            arr[i].style.color = 'whitesmoke';
                            arr[i].innerHTML = ranArr[i];
                        }  
                        arr[11].style.backgroundColor = 'whitesmoke';
                        arr[11].style.color = 'red';
                        arr[11].innerHTML = '';
                    }                 
                })
                addEventListener('click', function(){
                    if (equalArr(ranArr)){
                        ranArr = [1,2,3,4,5,6,7,8,9,10,11];
                        ranArr = ranArr.sort(() => Math.random() - 0.5);
                        ranArr.push(0);
                        console.log('da');

                        for (let i=0; i<11; i++){
                            arr[i].style.backgroundColor = 'blue';
                            arr[i].style.color = 'whitesmoke';
                            arr[i].innerHTML = ranArr[i];
                        }  
                        arr[11].style.backgroundColor = 'whitesmoke';
                        arr[11].style.color = 'red';
                        arr[11].innerHTML = '';
                    }                 
                })
            
        }

