import './wall.scss'


function add(){
    var ul = document.getElementById("addname");
   
    var name = document.getElementById("name");
    
    var li = document.createElement("li");
   
    li.setAttribute('id', name.value);
   
    li.appendChild(document.createTextNode(name.value));
    
    ul.appendChild(li)


    var ul = document.getElementById("addexcuse");
    
    var excuse = document.getElementById("excuse");
    
    var li = document.createElement("li");
  
    li.setAttribute('id', excuse.value);
   
    li.appendChild(document.createTextNode(excuse.value));
   
    ul.appendChild(li)

  


}


export default function Wall(){
    return(
        <div className='conteiner'>

           <div className='header'>
                 <div className='wallofshame'>

                 <h1>wall of shame</h1>

                 <div className='members'> 
                 <h3>5 members</h3>
                 </div>



                 </div>


               
           

             

                <div className='nav'>


            <div className='input_button'>
                
                <input placeholder='Name' type='text' id='name'></input>
                <input placeholder='Excuse'  type='text' id="excuse"></input>
                <button type='button' onClick={add} >create</button>


            </div>


                </div>



           </div>

















           <div className='name'>

             <h3>Name</h3>
             <h3>Excuse</h3>
             <h3>Count</h3>

           </div>




           <div className='list'>

         <div id="addname" className='name_list'>
            <ul>
                <li></li>
            </ul>
         </div>

         <div id="addexcuse" className='excuse_list'>
             <ul>
                <li></li>
            </ul>

         </div>
           

           <button className='increase'>increase</button>




           </div>



        </div>
        
    )
    
           
        
        
    
}