import React, { useEffect, useState } from "react";
import loader from "../../assets/loader.gif";
import axios from "axios";
import "./LoadingPage.css";
import { useParams } from "react-router";
import {
  customer_support_api,
  ns_verification_api,
} from "../../utiles/constants";

const LoadingPage = () => {
  const params = useParams();
  const [errMsg, setErrMsg] = useState("");

  const createNsApi = async () => {
    try {
      const response = await axios.post(ns_verification_api, {
        token: params.id,
      });
      console.log(response.data.data);
      window.location.href = response.data.data.url;
    } catch (error) {
      console.log(error.message);
      setErrMsg(error.message);
    }
  };

  useEffect(() => {
    if (!params.id) setErrMsg("Something went wrong!!");
    else createNsApi();
  }, []);

  return (
    <>
      <div className="container">
        {!errMsg ? (
          <h1>{errMsg}</h1>
        ) : (
          <>
            <div className="img-container">
              <img src={loader} alt="loading..." />
            </div>
            <h1>Please wait while we are configuring your Account</h1>
          </>
        )}
        <h2>
          For support{" "}
          <a href={customer_support_api} target={"_blank"}>
            Contact Us
          </a>
        </h2>
      </div>
    </>
  );
};

export default LoadingPage;
