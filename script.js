


  let a = +prompt('Введите число');
  let b = +prompt('Введите степень в которую нужно возвести число');
  let num = 1
  if(!isNaN(a) && !isNaN (b) && a != 0 && b != 0 ){
    for(let i = 1; i <= b; i++ ) {
        num = num * a
    }
    alert(num);
  }else if (!isNaN(a) && !isNaN (b) && b == 0 ){
      
    
    for(let i = 1; i <= (b = 2); i++ ) {
        num = num * a
    }
    alert(num);
  } else if (!isNaN(a) && !isNaN(b) && a == 0 && b != 0){
      alert('Первое число не далжно быть ( 0 ) введите коректное число')
  }




  









