// import Container from 'react-bootstrap/esm/Container'
import theImage from '../../public/images/London.jpg'
import './Add.css'
import {Link}  from 'react-router-dom'

function AddPage() {
  return (
    <div>
        <div className="addPoster_Discount">
            <div className="dicount_box">
                <div className="dicount_box_contect">
                    <h2>20% Discount On Summer Vacation</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas fugiat quaerat nemo reiciendis ducimus ad, voluptates praesentium dolorem possimus et eligendi repellat enim? Adipisci magni ipsam reprehenderit obcaecati voluptas!</p>
                    <div className="text-center discount_link ">
                        <Link to={'/'} >Go to home</Link>
                    </div> 
                    <div className="mt-5 text-center">
                        <span>*terms & condition apply</span>
                    </div>
                </div>
            </div>
            <div className="dicount_box">
                <div className="addImg_box">
                    <img src={theImage} alt="" className='img-fluid'/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default AddPage