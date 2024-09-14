import React from "react";
import "./adsPage.css";
import { Link } from "react-router-dom";
import AdCard from "../../Components/AdCard/AdCard";

const AdsPage = ({ adsData }) => {
  console.log(adsData);
  return (
    <>
      <div className="ads">
        <div className="post_ad">
          <Link to='/add'>
            <i className="fa-solid fa-plus"></i> Place an ad
          </Link>
        </div>
      </div>
      {adsData.length === 0 ? (
        <div className="no_ads">
          <h4>Ads Not Founded</h4>
        </div>
      ) : (
          <div className="ads_place">
            <div className="all_ads">
              {adsData.map((ad) => <AdCard ad={ad} key={ad.id}/>)}
            </div>
        </div>
      )}
    </>
  );
};

export default AdsPage;
