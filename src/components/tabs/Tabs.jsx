import React from "react";
import { Tab } from "semantic-ui-react";
import DataTable from "../dataTable/DataTable";
import PendingTable from "../dataTable/PandingTable";
import Paginations from "../pagination/Pagination";
import { useState } from "react";
import './tabs.css'

function Tabs({
  uploadImg,
  pendingOrders,
  sentOrders,
  paidOrders,
  unpaidOrders,
  allOrders,
  allDoneOrders,
  allProducts,
  changeStatus,
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [productsByPage, setProductsByPage] = useState([]);
  const [ordersByPage, setOrdersByPage] = useState([]);

  function getProductsByPage(productsByPage) {
    setProductsByPage(productsByPage);
  }

  function getOrdersByPage(ordersByPage) {
    setOrdersByPage(ordersByPage);
  }
  const panes = [
    {
      menuItem: "All Products",
      render: () => (
        <>
          <Tab.Pane>
            <DataTable list={productsByPage} uploadImg={uploadImg} />
          </Tab.Pane>
          <Paginations
            result={allProducts}
            tabIndex={tabIndex}
            getProductsByPage={getProductsByPage}
          />
        </>
      ),
    },
    {
      menuItem: "All Orders",
      render: () => (
        <>
          <Tab.Pane>
            <PendingTable list={ordersByPage} changeStatus={changeStatus} />
          </Tab.Pane>
          <Paginations
            result={allOrders}
            tabIndex={tabIndex}
            getProductsByPage={getOrdersByPage}
          />
        </>
      ),
    },
    {
      menuItem: "Pending",
      render: () => (
        <>
          <Tab.Pane>
            <PendingTable list={ordersByPage} changeStatus={changeStatus} />
          </Tab.Pane>
          <Paginations
            result={pendingOrders}
            tabIndex={tabIndex}
            getProductsByPage={getOrdersByPage}
          />
        </>
      ),
    },
    {
      menuItem: "UNPAID orders",
      render: () => (
        <>
          <Tab.Pane>
            <PendingTable list={ordersByPage} changeStatus={changeStatus} />
          </Tab.Pane>
          <Paginations
            result={unpaidOrders}
            tabIndex={tabIndex}
            getProductsByPage={getOrdersByPage}
          />
        </>
      ),
    },
    {
      menuItem: "SENT",
      render: () => (
        <>
          <Tab.Pane>
            <PendingTable list={ordersByPage} changeStatus={changeStatus} />
          </Tab.Pane>
          <Paginations
            result={sentOrders}
            tabIndex={tabIndex}
            getProductsByPage={getOrdersByPage}
          />
        </>
      ),
    },
    {
      menuItem: "PAID",
      render: () => (
        <>
          <Tab.Pane>
            <PendingTable list={ordersByPage} changeStatus={changeStatus} />
          </Tab.Pane>
          <Paginations
            result={paidOrders}
            tabIndex={tabIndex}
            getProductsByPage={getOrdersByPage}
          />
        </>
      ),
    },
    {
      menuItem: "DONE",
      render: () => (
        <>
          <Tab.Pane>
            <PendingTable
              list={ordersByPage}
              changeStatus={changeStatus}
              tabName={"DONE"}
            />
          </Tab.Pane>
          <Paginations
            result={allDoneOrders}
            tabIndex={tabIndex}
            getProductsByPage={getOrdersByPage}
          />
        </>
      ),
    },
  ];
  return (
    <>
      <Tab
        className="mainTabs"
        onTabChange={(e, activeIndex) => {
          setTabIndex(activeIndex);
        }}
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={panes}
      />
    </>
  );
}
export default Tabs;
