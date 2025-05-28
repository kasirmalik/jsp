const tabs = document.querySelector('.tabs');
const gallery = document.querySelectorAll('.images')

tabs.addEventListener('click',(e)=>{
console.log(e.target.dataset.category)
 filterSearch(e.target.dataset.category);
})



const filterSearch = (vale)=>{
   gallery.forEach((curr)=>{
    console.log(curr.dataset.category)
    if(curr.dataset.category === vale){
        curr.style.display = "block"
    }else{
        curr.style.display = 'none'
    }
   })
}