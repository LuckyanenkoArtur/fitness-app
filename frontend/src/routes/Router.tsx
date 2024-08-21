// import React from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

// Import pages
import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";

interface RootState {
  auth: {
    token: string | null;
    user: { id: string; username: string } | null;
  };
  // Other slices of the state
}

export const Router = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  // const token: boolean = true;
  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <>
            <Route element={<HomePage />} path="/" />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route>
            <Route element={<LoginPage />} path="/login" />
            <Route path="*" element={<Navigate to="/login" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};
