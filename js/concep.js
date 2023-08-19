let total=0;
function handleClickBtn(target){

    const getText=target.parentNode.childNodes[3].innerText;
    const celect=document.getElementById('celected')
    const h2=document.createElement('h2');
    h2.innerText = getText;
     celect.appendChild(h2)
     console.log()
     const getMoney=target.parentNode.childNodes[7].innerText.split(" ")[2];
     total=parseInt(total) + parseInt(getMoney)
     document.getElementById('total').innerText=total;
     
     
     
    
}
 
