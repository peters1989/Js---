


  let a = +prompt('Введите число');
  let b = +prompt('Введите степень в которую нужно возвести число');
  let num = 1
  if(!isNaN(a) && !isNaN (b) && a != 0 && b != 0 ){
    for(let i = 1; i <= b; i++ ) {
        num = num * a
    }
    alert(num);
  }else if (!isNaN(a) && !isNaN (b) && a != 0 && b == 0 ){
      
    
    for(let i = 1; i <= (b = 2); i++ ) {
        num = num * a
    }
    alert(num);
  } else if (!isNaN(a) && !isNaN(b) && a == 0 && b != 0){

    let a = +prompt('Введите число не равное ( 0 )');
    let b = +prompt('Введите степень в которую нужно возвести число');


    for(let i = 1; i <= (b = 2); i++ ) {
        num = num * a
    }
    alert(num);
      
  } else if (!isNaN(a) && !isNaN(b) && a == 0 && b == 0){
    let a = +prompt('Введите число не равное ( 0 )');
    let b = +prompt('Введите степень в которую нужно возвести число');


    for(let i = 1; i <= (b = 2); i++ ) {
        num = num * a
    }
    alert(num);
  }




  


  









