import React, { useEffect, useState } from "react";
import { json, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import getUsersData from "../Helper/getUsersData";
import getCurretUser from "../Helper/getCurretUser";
import getAdsDate from "../Helper/getAdsDate";
import AdsPage from "../Pages/AdsPage/AdsPage";
import Add from "../Pages/Add/Add";
import Items from "../Pages/Items/Items";
import UserPage from "../Pages/UserPage/UserPage";

const AppRoutes = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [adsData, setAdsData] = useState([]);

  const fetchData = async () => {
    const userArray = await getUsersData();
    const loginedUser = await getCurretUser();
    const activeAds = await getAdsDate();
    setUsersData(userArray);
    setCurrentUser(loginedUser);
    setAdsData(activeAds);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout currentUser={currentUser} />}>
        <Route index element={<HomePage />} />
        <Route path="/announcements" element={<AdsPage adsData={adsData} />} />
        <Route path="item/:id" element={<Items />}>
          {" "}
        </Route>
        <Route
          path="user/:id"
          element={<UserPage adsData={adsData} currentUser={currentUser} fetchData={fetchData} />}
        />
      </Route>

      {!currentUser?.id ? (
        <>
          <Route path="/login" element={<Login usersData={usersData} fetchData={fetchData} />} />
          <Route path="/signup" element={<Signup />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
      {currentUser?.id ? (
        <>
          <Route
            path="/add"
            element={
              <Add
                currentUser={currentUser}
                setAdsData={setAdsData}
                adsData={adsData}
              />
            }
          />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
