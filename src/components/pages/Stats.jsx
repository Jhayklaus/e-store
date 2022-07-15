import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header";

const Stats = () => {
  return (
    <>
      <Header />
      <div className="main_wrapper">

        <div className="stats_wrapper">
          <div className="board_wrapper row1">
            <div className="order total">
              <h4>Total Orders</h4>
              <h1>22</h1>
            </div>
            <div className="order pending">
              <h4>Pending Orders</h4>
              <h1>2</h1>
            </div>
          </div>

          <div className="board_wrapper row2">
            <div className="order spent">
              <h4>Total Amount Spent</h4>
              <h1>$229,03</h1>
            </div>
            <div className="order voucherUsed">
              <h4>Voucher used</h4>
              <h1>2</h1>
            </div>
          </div>

          <div className="board_wrapper row3">
            <div className="order cashback">
              <h4>Cashback on Vouchers</h4>
              <h1>$29,03</h1>
            </div>
            <div className="order cancelled">
              <h4>Cancelled Orders</h4>
              <h1>5</h1>
            </div>
          </div>
        </div>

        <div className="order_history">
            <h3 style={{ marginBottom:"10px",}}>Order History</h3>
            <div className="history_titles">
                    <p>Order ID</p>
                    <p>Total Amount</p>
                    <p>Total Items</p>
                    <p>Time stamp</p>
                    <p>Status</p>
            </div>

            <div className="history_item">
                    <p>SX76893</p>
                    <p>$55,00</p>
                    <p>5</p>
                    <p>13:00</p>
                    <p className="statusPending">Pending</p>
            </div>
            <hr/>
            <div className="history_item">
                    <p>SX43893</p>
                    <p>$21,00</p>
                    <p>2</p>
                    <p>18:00</p>
                    <p className="statusPending">Pending</p>
            </div>
            <hr/>
            <div className="history_item">
                    <p>SX35893</p>
                    <p>$21,00</p>
                    <p>2</p>
                    <p>13:00</p>
                    <p className="statusSuccess">Received</p>
            </div>
            <hr/>
            <div className="history_item">
                    <p>SX78793</p>
                    <p>$33,00</p>
                    <p>3</p>
                    <p>10:00</p>
                    <p className="statusSuccess">Received</p>
            </div>
            <hr/>
            <div className="history_item">
                    <p>SX78793</p>
                    <p>$11,00</p>
                    <p>1</p>
                    <p>10:00</p>
                    <p className="statusSuccess">Received</p>
            </div>
            <hr/>
            <div className="history">
            <NavLink className='no-underline' to="/history">
                <p>See all history</p>
            </NavLink>
            </div>
        </div>

      </div>
    </>
  );
};

export default Stats;
