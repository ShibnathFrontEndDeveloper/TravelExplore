
// import { FaBusAlt } from "react-icons/fa";
// import { PiAirplaneTakeoffFill } from "react-icons/pi";
// import { RiShip2Fill } from "react-icons/ri";
import './Tripcard.css'
import { FaRupeeSign } from "react-icons/fa";
import {Link} from 'react-router-dom'

function TripCard(props) {
  return (
    <div>
        <div className="tourList_box">
            <div className="tourList_dtls_box">
                <div className="listImg_box">
                    <Link to={'/Detailstrip'}><img src={props.ImageSource} alt=""/></Link>
                </div>
                <div className="listText_box px-3">
                    <Link to={'/Detailstrip'}><h2>{props.title}</h2></Link>
                    <div className="listText_price_box">
                        <div className="listText_tag_box">
                            <h2>{props.subTitle}</h2>
                        </div>
                        <div className="listText_tag_box listText_tagPrice_box">
                            <h2><FaRupeeSign/>{props.rupee}</h2>
                        </div>
                    </div>
                    <div className="listText_tag_box_articles">
                        <p>{props.cobtent}</p>
                    </div>
                </div>
                <div className="addTag_box">
                    <p>{props.sale}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TripCard