import LoginController from "./component/Login/Login.controller"
import RegisterController from "./component/Register/Register.controller"
import ToolbarMenuButton from "./miscs/ToolbarMenuButton"
import Dashboard from "./component/Dashboard/Dashboard.view"
 

export default
[
    {
        name:"Login",
        component: LoginController,
        options:{
            headerRight: () => ToolbarMenuButton()
        }
    },
    {
        name:"Register",
        component: RegisterController
    },
    {
        name:"Dashboard",
        component: Dashboard
    }
    
]
