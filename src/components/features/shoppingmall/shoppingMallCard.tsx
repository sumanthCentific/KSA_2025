import React from "react";
import { Card } from "../../ui/Card";
import { Foods } from "../../../services/restaurantService";
 
interface shoppingMallCardProps {
  foods: Foods;
}
 
const style = {
    gridStyle: {
        display:"grid",
        gridTemplateColumns: '180px 1fr',
    },
    iconGridStyle: {
        display:"grid",
        gridTemplateColumns: '100px 130px',
    },
    iconGridContentStyle: {
        display: "grid",
        gridTemplateColumns: '25px 1fr',
        border: '1px solid #454545',
        borderRadius: '50px',
        padding: '10px',
        width: '90%',
        marginBottom: '10px',
        fontSize:'12px',
        lineHeight: '20px',
        height: '40px'
    },
    titleGridStyle: {
      display: "grid",
        gridTemplateColumns: '190px 1fr',
    },
    distance : {
        borderRadius: '10px',
        width: '24%',
        background: 'gray',
        padding: '10px',
        fontSize: '12px',
        height: '28px',
        lineHeight: '8px',
        textAlign: 'center',
    },
    description: {
        fontSize:'14px',
        fontWeight: '100',
        marginBottom: '5px',
        color: '#A0A0A0'
    }
};
 
const RestaurantCard: React.FC<shoppingMallCardProps> = ({ foods }) => {
  return (
    <Card className="bg-gray-800 p-6 rounded-lg" style={{fontFamily:'Poppins, sans-serif'}}>
      <div style={style.iconGridStyle}>
        <div style={style.iconGridContentStyle}>
            <span><img src={foods.originIcon} alt={foods.origin} /></span>
            <span>{foods.origin}</span>
        </div>
        <div style={style.iconGridContentStyle}>
            <span><img src={foods.typeIcon} alt={foods.type} /></span>
            <span>{foods.type}</span>
        </div>
      </div>
      <div>
        <div style={style.gridStyle}>
                <div style={{paddingRight: '12px'}}>
                    <img src={foods.image} alt={foods.name} style={{borderRadius: '10px', height:"100%"}}/>
                </div>
                <div>
                    <div style={style.titleGridStyle}>
                        <h5>{foods.name}</h5>
                        <span style={style.distance}>{foods.distance} {foods.unit}</span>
                    </div>
                    <p style={style.description}> {foods.description}</p>
                    <p style={{fontSize:'14px'}}>Price: {foods.price}</p>
                </div>
        </div>
      </div>
    </Card>
  );
};
 
export default RestaurantCard;