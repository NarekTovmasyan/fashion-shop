import "./dashboard.css";
import { getOrders } from "../../Services/api";
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();

  console.log(user);
  (async function(){
    try {
        const token = await getAccessTokenSilently();
    
        console.log("token=", token);
        
        getOrders(user.sub,token);
        
      } catch (error) {
        console.log("user not authorised");
      }
  })();
  return <div className="dashboard ui container">it's dashboard</div>;
}

export default Dashboard;
