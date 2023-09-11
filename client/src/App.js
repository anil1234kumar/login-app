import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Username from "./component/Username";
import Reset from "./component/Reset";
import Regiester from "./component/Regiester";
import Recovery from "./component/Recovery";
import Profile from "./component/Profile";
import Password from "./component/Password";
import PageNotFound from "./component/PageNotFound";
import Landing from "./pages/landing/Landing";
import Animal from "./pages/animal/Animal";
import { ThemeProvider } from "./component/theme/ThemeProvider";
import Tree from "./pages/tree/Tree";
import Birds from "./pages/bird/Birds";
import Fish from "./pages/fish/Fish";
import Login from "./component/login/Login";
import Signup from "./component/singup/Signup";
import ForgetPassword from "./component/forgetPassword/ForgetPassword";
import PasswordReset from "./component/passwordReset/PasswordReset";
import SetNewPassword from "./component/setnewpassword/SetNewPassword";
import MouseContextProvider from "./component/mouseContext/MouseContextProvider";

// ***import all components***

/***root router */
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/setPassword", element: <SetNewPassword /> },
  { path: "/forgetPassword", element: <ForgetPassword /> },
  { path: "/forgetReset", element: <PasswordReset /> },
  { path: "/animal", element: <Animal /> },
  { path: "/trees", element: <Tree /> },
  { path: "/birds", element: <Birds /> },
  { path: "/fishes", element: <Fish /> },
  { path: "/user", element: <Username /> },
  { path: "/reset", element: <Reset /> },
  { path: "/register", element: <Regiester /> },
  { path: "/recovery", element: <Recovery /> },
  { path: "/profile", element: <Profile /> },
  { path: "/password", element: <Password /> },
  { path: "*", element: <PageNotFound /> },
]);
function App() {
  return (
    <>
      <ThemeProvider>
        <MouseContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </MouseContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
