import React,{useState} from 'react';
import './Certification.css';
import { CgCloseO } from "react-icons/cg";
import Images from './Images'
const Certification = () => {

    return (
            <div className="cert-container">
                <div className='title cert'>
                <h2>Certification</h2>
                <div className='underline cert-underline'></div>
                </div>
                <div className='cart-container'>
                    { 
                        Images.map((image,id)=><Cart key={id} image={image}/> )     
                    }

                </div>
            </div>

    );
    
}


const Cart=({image} )=>{
     const [showImage,setShowImage]=useState(false)
     const [enlargeimage,setEnlargeimage]=useState(null);
    // console.log(Images)
    console.log(showImage,enlargeimage)
    const GettingImage=(e)=>{
        console.log(e);
        setEnlargeimage(e);
        setShowImage(true);
        console.log(showImage)
        console.log(enlargeimage)   
    }

   
    return (
        <div className="certficate-container">
           { showImage && <div className='popup-box'>
                                <div className='box'>
                                <span onClick={()=>setShowImage(false)} className='close'><CgCloseO size={30}/></span>
                                <img className='enlarge-img' src={enlargeimage} alt='cart_image'/>
                                {/* <h1>hello image {enlargeimage}</h1> */}
                                </div>
                            </div> 
           }
            <img onClick={()=>GettingImage(image)} className='image-css' src={image} alt="Cart_image"/>
        </div>
   )
}

export default Certification;