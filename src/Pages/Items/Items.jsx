import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import getItemById from "../../Helper/getItemById";
import getUserById from "../../Helper/getUserById";
import "./items.css";
import ItemInfo from "../../Components/ItemInfo/ItemInfo";

const Items = () => {
  const [item, setItem] = useState({});
  const [user, setUser] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [checkCall, setCheckCall] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const getItem = await getItemById(id);
      setItem(getItem);
      const getUser = await getUserById(getItem.userId);
      setUser(getUser);
    };
    fetchData();
  }, []);

  const nextImage = () => {
    setCurrentImage(currentImage + 1);
    if (currentImage === item?.adImages?.length - 1) {
      setCurrentImage(0);
    }
  };
  const prevImage = () => {
    setCurrentImage(currentImage - 1);
    if (currentImage === 0) {
      setCurrentImage(item?.adImages?.length - 1);
    }
  };
  const goToUserProfile = () => {
    navigate(`/user/${user.id}`);
  };
  return (
    <>
      {checkCall ? (
        <div className="call">
          <div className="call_body">
            <div className="goBack">
            <i className="fa-solid fa-xmark" onClick={() => setCheckCall(false)}></i>
            </div>
            <div className="call_user_info">
              <div className="call_user_image" style={{ backgroundImage: `url(${user?.profileImage})` }}></div>
              <div className="call_user_fullname">
                <h4>{user.name} {user.surname}</h4>
              </div>
            </div>

            <div className="phone_number">
              <h2>+{user.phoneNumber}</h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="item_images_and_owner">
        <div className="item_images">
          <div className="item_images_body">
            <div
              className="item_image"
              style={
                item?.adImages?.[0]?.ImageURL
                  ? {
                      backgroundImage: `url(${item.adImages[currentImage].ImageURL})`,
                    }
                  : {}
              }
            >
              {item?.adImages?.length > 1 ? (
                <>
                  <div className="slider_arrows">
                    <i
                      className="fa-solid fa-arrow-left"
                      onClick={prevImage}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-right"
                      onClick={nextImage}
                    ></i>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <ItemInfo item={item} />
        </div>
        <div className="item_owner">
          <div className="owner_main_info">
            <div
              className="owner_image"
              style={{ backgroundImage: `url(${user.profileImage})` }}
              onClick={goToUserProfile}
            ></div>
          </div>
          <div className="owner_fullname">
            <h3>
              {user.name} {user.surname}
            </h3>
          </div>
          <div className="owner_call">
              <button onClick={() => setCheckCall(true)}>Call</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
