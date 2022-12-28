

const showTop = ()=>{
    console.log( document.body.scrollTop)
    if( document.documentElement.scrollTop > 500) {
        document.querySelector('.btn-skroll-top').style.display = "block"
    }else{
        document.querySelector('.btn-skroll-top').style.display = "none"
    }
   
}

window.addEventListener('scroll', showTop) 


const scrollTop = ()=>{
    document.documentElement.scrollTop = 0
    
}
document.querySelector('.btn-skroll-top').addEventListener('click', scrollTop)


