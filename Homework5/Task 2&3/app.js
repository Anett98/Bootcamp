 let body = document.querySelector('table')
 
//  let count = 0
 
 fetch('http://127.0.0.1:5500/Task%202%20and%203/data.js').then(res=>res.json()).then(res=>res.map((el)=>{
    myTable(el)
 }))
 let max_items_to_show = 10
 let show_description = false
 

 function myTable (element) {
        if(element.status === true && max_items_to_show) {
         max_items_to_show--
            let newTr = document.createElement('tr')
             body.append(newTr)
            let idTd = document.createElement('td')
             newTr.append(idTd)
            let nameTd = document.createElement('td')
             newTr.append(nameTd)
            let statusTd = document.createElement('td')
             newTr.append(statusTd)
            let descriptionTd = document.createElement('td')
             newTr.append(descriptionTd)
            let deleteTd = document.createElement('td')
            newTr.append(deleteTd)
            deleteTd.innerHTML = `<button class = 'delete'>DELETE</button>`
           nameTd.innerText = element['name']
           idTd.innerText = element['id']
           statusTd.innerText = element['status']
            show_description? descriptionTd.innerText = element['description']:descriptionTd.innerText = 'N/A'
           
        }


} 
body.addEventListener('click', (e)=>{
   let target = e.target
   if(target.classList[0] === 'delete') {
      const userToDelete = target.parentElement.parentElement
      userToDelete.remove()
   }
})