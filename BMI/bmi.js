const form=document.querySelector('form')


form.addEventListener('submit',function(e){
    e.preventDefault();

    const Height=parseInt(document.querySelector('#height').value)
    const Weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if( Height ==='' || Height <0){
        results.innerHTML="Please Enter A Valid Value" ;
    }
     else if( Weight ==='' || Weight <0){
        results.innerHTML="Please Enter A Valid Value" ;
    }
    else {
        let result= (Weight / ((Height*Height)/10000)).toFixed(2);
        results.innerHTML=`The Result is :-${result}`;
    }
})