let contador = 0;
let arr = document.querySelectorAll('.L3NKy');

arr.forEach((v, i) => {
  setTimeout(()=>{
      if(!v.classList.contains('_8A5w5')){
        v.click();
        contador++;
        console.log('Você já seguiu '+contador+' pessoas');
      } else{
        console.log('Você já segue este usuario');
      }
    }, i*1000 )
});
