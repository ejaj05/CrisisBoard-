import axios from "axios";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setLoading } from "../slices/auth";
import sentOtp from "../services/operation/auth";

const VerifyOtp = () => {
  const [otp, setOtp] = useState();
  const { signupData,loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyEmail = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/signup`,
        { ...signupData, otp: otp }
      );
      console.log(response);
      toast.success(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
    dispatch(setLoading(false));
  };

  const resendOtp = () => {
    dispatch(sentOtp(navigate,signupData.email));
  }
  return (
    <div className="bg-blue-100 h-screen w-full px-8 py-20 md:p-16">
      <div className="w-full md:w-86 mx-auto md:my-8">
        <div>
          <h1 className="text-4xl font-semibold">Verify email</h1>
          <p className="text-sm my-1">
            A verification code has been sent to you. Enter the code below
          </p>
        </div>
        <div className="flex justify-between my-6">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
            placeholder=""
            inputStyle={{
              backgroundColor: "white",
              width: "46px",
              marginRight: "13px",
              height: "40px",
              fontSize: "18px",
              textAlign: "center",
              borderRadius: "4px",
              borderBottom: "1px solid white",
              outline: "none",
            }}
          />
        </div>

        <div className="w-full  bg-[#1E88E5] hover:bg-[#1e88e5da] text-white p-2 rounded-md flex justify-center">
          <div onClick={verifyEmail} className='flex items-center gap-2 cursor-pointer'>
            {loading ? <>Verifying...<div className='w-5 h-5 border-r-2 animate-spin border-2 border-gray-400 border-t-white rounded-full'></div></> : "Verify and create"}
          </div>
        </div>
        <div className="flex justify-between my-3">
          <div
            onClick={() => navigate("/login")}
            className="flex items-center cursor-pointer gap-1"
          >
            <FaArrowLeftLong />
            <span>Back to login</span>
          </div>

          <div onClick={resendOtp} className="flex items-center cursor-pointer gap-1">
            <LuTimerReset />
            <span>Resend it</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
