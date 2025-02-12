import React from 'react';
import './Home-Details.css';
import productData from '../../../ToDaysDails.json';
import offers from '../../../TodayOffers.json';

export const HomeDetails = () => {
  return (
    <div className="homeDetails">
      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Today’s Deals</div>
        <div className="homeDetailLongCardItems">
          <div className="scrollDiv">
            {productData.map((item) => (
              <div className="homeDetailLongCardItem" key={item.id}>
                <img className='homeDetailLongCardItemImg' src={item.imageUrl} alt={item.title} />
                <div className="homeDetailLongCardItemImgDetail">
                  <div className="homeDetailLongCardItemImgTopDetail">
                    <div className="homeDetailPercentageOff">{item.discount} Off</div>
                    <div className="limitedTimeDealhomeDetail">{item.deal}</div>
                  </div>
                  <div className="bottomHomeDetail">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="homeDetailLongCard">
        <div className="homeDetailLongCardTitle">Today’s Offers</div>
        <div className="homeDetailLongCardItems">
          <div className="scrollDiv">
            {offers.map((offer) => (
              <div key={offer.id} className="homeDetailLongCardItem">
                <img className="homeDetailLongCardItemImg" src={offer.imageUrl} alt={offer.description} />
                <div className="homeDetailLongCardItemImgDetail">
                  <div className="homeDetailLongCardItemImgTopDetail">
                    <div className="homeDetailPercentageOff">{offer.discount}</div>
                    <div className="limitedTimeDealhomeDetail">{offer.deal}</div>
                  </div>
                  <div className="bottomHomeDetail">{offer.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};