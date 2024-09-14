import React, { useState } from "react";
import "./add.css";
import checkInputValue from "../../Helper/checkInputValue";
import '../../Helper/postAd'
import postAd from "../../Helper/postAd";
import editUser from "../../Helper/editUser";
import { useNavigate } from "react-router-dom";
import nowDate from "../../Helper/nowDate";
const Add = ({currentUser, setAdsData, adsData}) => {
  const navigate = useNavigate();
  const [imagesData, setImagesData] = useState([]);
  const [image, setImage] = useState([]);
  const [imageId, setImageId] = useState(0);

  const uploadImage = (e) => {
    if (image.length === 8) {
      alert("Maximum images 8");
      return;
    }
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      setImageId(imageId + 1);
      const resultImg = e.target.result;
      setImage([...image, {id: imageId,ImageURL: resultImg}]);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };
  const sumbitAd = async(e) => {
    e.preventDefault();
    const [
      location,
      adTitle,
      type,
      brand,
      year,
      engineType,
      transmission,
      chassisConf,
      addInfo,
      price,
      phoneNumber,
    ] = e.target;
    const checkValue = checkInputValue(
      location.value,
      adTitle.value,
      type.value,
      brand.value,
      year.value,
      engineType.value,
      transmission.value,
      chassisConf.value,
      addInfo.value,
      price.value,
      phoneNumber.value
    );
    if (checkValue && image.length !== 0) {
      const newAd = {
        id: new Date().getTime().toString(),
        location: location.value,
        adTitle: adTitle.value,
        type: type.value,
        brand: brand.value,
        year: year.value,
        engineType: engineType.value,
        transmission: transmission.value,
        chassisConf: chassisConf.value,
        addInfo: addInfo.value,
        price: `${price.value}€`,
        phoneNumber: phoneNumber.value,
        adImages: [...image],
        userName: `${currentUser.name} ${currentUser.surname}`,
        userId: currentUser.id,
        date: nowDate(),
      }
      const userAd = {
        activeAds: [...currentUser.activeAds, newAd.id],
        phoneNumber: phoneNumber.value,
      };

      postAd(newAd)
      editUser(currentUser.id, userAd);
      setAdsData([...adsData, newAd]);
      navigate('/announcements')

    } else {
      return;
    }
  };

  const deleteImage = (id) => {
    setImage(image.filter((image) => image.id !== id));
  }
  return (
    <>
      <div className="post_add">
        <form className="post_form" action="#" onSubmit={sumbitAd}>
          <div className="location">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Location" />
          </div>
          <div className="specifications">
            <label htmlFor="adTitle">Ad Title</label>
            <input type="text" id="adTitle" placeholder="Title" />
          </div>
          <div className="specifications">
            <label htmlFor="typeCar">Type</label>
            <input type="text" id="typeCar" placeholder="Type" />
          </div>
          <div className="specifications">
            <label htmlFor="brandCar">Brand</label>
            <input
              type="text"
              id="brandCar"
              placeholder="Brand. for example - DAF"
            />
          </div>
          <div className="specifications">
            <label htmlFor="year">Year</label>
            <input type="text" id="year" placeholder="Year" />
          </div>
          <div className="specifications">
            <label htmlFor="engineType">Engine Type</label>
            <input type="text" id="engineType" placeholder="Engine Type" />
          </div>
          <div className="specifications">
            <label htmlFor="transmission">Transmission</label>
            <input type="text" id="transmission" placeholder="Transmission" />
          </div>
          <div className="specifications">
            <label htmlFor="chConfiguration">Chassis Configuration</label>
            <input
              type="text"
              id="chConfiguration"
              placeholder="Chassis Configuration"
            />
          </div>
          <div className="add_info">
            <label htmlFor="description">Additional Information</label>
            <textarea
              id="description"
              placeholder="Additional Information"
              rows="5"
            ></textarea>
          </div>
          <div className="specifications">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              placeholder="Price"
            />
          </div>
          <div className="phone_number">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" placeholder="Example - +374000000" />
          </div>
          <div className="upload_image">
            <label htmlFor="upload_adImage" style={{cursor: 'pointer'}}>Add Image</label>
            <div className="upload">
              <input
                type="file"
                id="upload_adImage"
                accept="image/png, image/jpeg, image/SVG, image/jpg"
                onChange={uploadImage}
              />
            </div>
            <div className="image_previews">
              {image.map((image, index) => (
                <>
                <div
                key={image.id}
                  id={image.id}
                  style={{ backgroundImage: `url(${image.ImageURL})` }}
                >
                  </div>
                  <i className="fa-solid fa-xmark delete-img" onClick={() => deleteImage(image.id)}></i>
                  </>
              ))}
            </div>
          </div>
          <div className="submit_button">
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className="add_images"></div>
      </div>
    </>
  );
};

export default Add;
