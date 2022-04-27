import { Tab } from "semantic-ui-react";
import { render } from '@testing-library/react';
import UserOrdersTable from "../dataTable/UserOrdersTable";
import { useState, useEffect } from "react";
import Paginations from "../pagination/Pagination";
import './tabs.css'

function UserOrderTabs({orderList}){
const [result, setResult] = useState([]);
const [userData, setUserData] = useState({});
const {pendingsOrders, unpaidOrders, sentOrders, paidOrders, doneOrders } = userData;
const [ordersByPage, setOrdersByPage] = useState([]);
const [tabIndex, setTabIndex] =useState(0);

    function userPendingsOrders(orderList){
        return orderList.filter(item => item.orderStatus === "PENDING").sort((a,b) => b.date - a.date);
    }
    function userUnpaidOrders(orderList){
        return orderList.filter(item => item.orderStatus === "UNPAID").sort((a,b) => b.date - a.date);
    }
    function userSentOrders(orderList){
        return orderList.filter(item => item.orderStatus === "SENT").sort((a,b) => b.date - a.date);
    }
    function userPaidOrders(orderList){
        return orderList.filter(item => item.orderStatus === "PAID").sort((a,b) => b.date - a.date);
    }
    function userDoneOrders(orderList){
        return orderList.filter(item => item.orderStatus === "DONE").sort((a,b) => b.date - a.date);
    }
    function getOrdersByPage(ordersByPage){
        setOrdersByPage(ordersByPage)
    }
    useEffect(()=>{
        setUserData((userData) => ({
            ...userData,
            pendingsOrders: userPendingsOrders(result),
            unpaidOrders: userUnpaidOrders(result),
            sentOrders: userSentOrders(result),
            paidOrders: userPaidOrders(result),
            doneOrders: userDoneOrders(result)
        }));
    }, [result])

    console.log("userData " ,userData);

    const [productsByPage, setProductsByPage] = useState([]);
  
    

    useEffect(() =>{
      if (orderList && orderList.length > 0) setResult(orderList)
    }, [ orderList])

    const panes = [
        {
            menuItem: "Pending",
            render: () => (
              <>
                <Tab.Pane>
                <UserOrdersTable list={ordersByPage}/>
                <Paginations result={pendingsOrders} getOrdersByPage={getOrdersByPage} tabIndex={tabIndex}/>
                </Tab.Pane>
              </>
            )
        },
        {
            menuItem: "Unpaid",
            render: () => (
                <>
                <Tab.Pane>
                    <UserOrdersTable list={ordersByPage}/>
                </Tab.Pane>
                <Paginations result={unpaidOrders} getOrdersByPage={getOrdersByPage} tabIndex={tabIndex}/>
                </>
            )
        },
        {
            menuItem: "Sent",
            render: () => (
             <>
                <Tab.Pane>
                    <UserOrdersTable list={ordersByPage}/>
                </Tab.Pane>
                 <Paginations result={sentOrders} getOrdersByPage={getOrdersByPage} tabIndex={tabIndex}/>
             </>
            )
        },
        {
            menuItem: "Paid",
            render: () => (
                <>                
                <Tab.Pane>
                    <UserOrdersTable list={ordersByPage} />
                </Tab.Pane>
                <Paginations result={paidOrders} getOrdersByPage={getOrdersByPage} tabIndex={tabIndex}/>
                </>
            )
        },
        {
            menuItem: "Done",
            render: () => (
                <>                
                <Tab.Pane>
                    <UserOrdersTable list={ordersByPage} />
                </Tab.Pane>
                <Paginations result={doneOrders} getOrdersByPage={getOrdersByPage} tabIndex={tabIndex}/>
                </>
            )
        },
    ]
    return (
        <Tab panes={panes} onTabChange={(e, activeIndex)=>{setTabIndex(activeIndex)}}/>
    )
}
export default UserOrderTabs;