import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DarkModeProvider } from "./context/darkModeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage";
import DashboardPage from "./routes/DashboardPage";
import ChatPage from "./routes/ChatPage";
import RootLayout from "./layouts/rootLayout";
import DashboardLayout from "./layouts/dashboardLayout";
import SignInPage from "./routes/SignInPage";
import SignUpPage from "./routes/SignUpPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            children: [
              { path: "dashboard", element: <DashboardPage /> },
              { path: "/dashboard/chats/:id", element: <ChatPage /> },
            ],
          },
        ],
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <RouterProvider router={router} />
  </DarkModeProvider>
);
