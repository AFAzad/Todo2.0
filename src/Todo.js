import React, {useState} from 'react'
import './App.css';

const Todo = () => {
  const [inputdata, setinputdata] = useState('');
  const [item, setItem] = useState([]);

 
  const addItem = () =>{
    if (!inputdata){
      alert('Invalid ! Item');
    }else{
      setItem([...item,inputdata]);
      setinputdata('')

    }
  
      }

   const deleteItem = (id) =>{
        const resetData = item.filter((element,index)=>{
          return index !== id;

        })
        setItem(resetData);
   }   


   const removeAll = () =>{
    setItem([])
   }



  return (
    <>
    <div className="main-div">
    <div className="child-div">
        <h1>Todo-List</h1>
        <div className="add-item" >
          <div>
            <input type="text" placeholder="Add your items" value={inputdata} onChange={(e)=>setinputdata(e.target.value)} />
            <button className="add-button" tittle="Add here" onClick={addItem}>Add</button>
            </div>
        </div>
    </div>
    <div className='show-item'>

      {
        item.map((element, index) =>{

          return(
            <div className='display Item' key={index}>{element} <button onClick={()=>deleteItem(index)}>Delete</button> </div>
          )

        })
      }
      
    </div>

    <div className="remove-all">
      <button onClick={removeAll}>Remove All</button>
    </div>
    
    </div>
    </>
    
  );
}

export default Todo;


