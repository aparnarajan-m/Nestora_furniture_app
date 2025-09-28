import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { closeLogout, logOut } from "../Redux/authSlice";
import { toast } from "react-toastify";
import './logoutmodal.css'

function LogOutModal() {
    const dispatch = useDispatch();
    const { isLogoutOpen } = useSelector((state) => state.auth);

    if (!isLogoutOpen) return null;

    const handleConfirm = () => {
      dispatch(logOut());
      dispatch(closeLogout());
      toast.success("Logged out successfully!");
    };

  return (
    <div className="logout-modal">
      <div className="logout-content">
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout?</p>
        <div className="logout-modal-actions">
          <button className="confirm-btn" onClick={handleConfirm}> Yes </button>
          <button className="cancel-btn" onClick={() => dispatch(closeLogout())}> Cancel </button>
        </div>
      </div>
    </div>
  )
}

export default LogOutModal