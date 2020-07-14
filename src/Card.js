import React,{useState} from 'react';
import Modal from 'react-modal';


const Card = ({key,title,tagline,description,imgsrc}) => {
    const [openState,setOpenState] = useState(false)
    return (
        <>
        
        <div className="card">
        
        <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{tagline}</p>
        
        <button  className="buttonLighter" onClick={()=>setOpenState(true)}>Know More</button> 
        <Modal isOpen={openState}>
        <div className="ModalContent">
        <div>
        <img src={imgsrc} alt="football"/>
        </div>      
        <div >
        <p>{description}</p>
        <button className="buttonLighter" onClick={()=>setOpenState(false)}>Close</button>
        </div>  
        

        
        </div>
        </Modal>   


        </div>
        </div>
        </>
    )
}

export default Card
