"use client";
import ErrorPage from "./error";

export default function NotFound() {
  const error = { message: "404" };
  return <ErrorPage error={error} reset={() => (window.location.href = "/")} />;
}
