import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const OTPPage = lazy(() => import("../pages/OTP/OTPPage"));
const SearchPage = lazy(() => import("../pages/Search/SearchPage"));

export const PublicRoutes = [
  { path: "/", Element: <LoginPage /> },
  { path: "/otp", Element: <OTPPage /> },
  { path: "/search", Element: <SearchPage /> },
];
