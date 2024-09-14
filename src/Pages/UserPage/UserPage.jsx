import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getUserById from "../../Helper/getUserById";
import "./userPage.css";
import AdCard from "../../Components/AdCard/AdCard";
import editUser from "../../Helper/editUser";
import logOutAccount from "../../Helper/logOutAccount";

const UserPage = ({ adsData, currentUser, fetchData }) => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [ads, setAds] = useState();
    const [image, setImage] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const getUser = await getUserById(id);
      setUser(getUser);

      if (getUser) {
        const userAds = adsData.filter((ad) =>
          getUser.activeAds.includes(ad?.id)
        );
        setAds(userAds);
      }
    };

    fetchData();
  }, [id, adsData]);

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const resultImg = e.target.result;
      setImage(resultImg);
      const editedImage = {
        profileImage: resultImg,
      };
      editUser(user?.id, editedImage);
      fetchData();
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
    };
    
    const logOut = async () => {
        logOutAccount(user?.id);
        fetchData();
        navigate('/announcements')
    }

  return (
    <div className="user_profile">
      <div className="user_info">
        <div
          className="user_profile_image"
          style={{ backgroundImage: `url(${user?.profileImage})` }}
        ></div>
        <div className="user_fullname">
          <h3>
            {user?.name} {user?.surname}
          </h3>
        </div>
        {currentUser?.id === user?.id ? (
          <>
            <div className="change_profile_image">
              <label htmlFor="editProfileImage">Change</label>
              <input
                type="file"
                id="editProfileImage"
                accept="image/png, image/jpeg, image/SVG, image/jpg"
                onChange={uploadProfileImage}
              />
                      </div>
                      <div className="logOut" onClick={logOut}>
                      <i className="fa-solid fa-right-from-bracket"></i> Log out
                      </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="user_active_ads">
        <h4 className="active_ads_title">{user?.name}'s Active Ads</h4>
        <div className="ads_place">
          <div className="all_ads userAds">
            {ads?.map((ad) => (
              <>
                {" "}
                <AdCard ad={ad} key={ad.id} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
