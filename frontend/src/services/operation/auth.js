import { toast } from "react-toastify"
import { setLoading } from "../../slices/auth"
import axios from "axios"

const sentOtp = (navigate,email) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/sendOtp`,{email})
            console.log("SENDOTP API RESPONSE............", response)

            console.log(response.data.success)

            if (!response.data.success) {
                toast.error(response.data.message)
            }

            toast.success("OTP Sent Successfully")
            navigate("/verify-Email")
        } catch (error) {
            console.log("SENDOTP API ERROR............", error)
            if (error?.response?.data?.message == "User already exist") {
                toast.error(error?.response?.data?.message)
            } else {
                toast.error("Failed to send OTP")
            }

        }
        dispatch(setLoading(false))
    }
}

export default sentOtp