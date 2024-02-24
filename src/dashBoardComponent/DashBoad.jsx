import React from 'react'
import "./DashBoad.css"

const DashBoad = () => {
    return (
        <div className="dashboardContainer">
            <div className='dashBoardLeft'>
                <div className='logoContainer'>
                    <img src="./grace.png" className='logo' />
                    <div className='dashBoardText'>
                        <div className='dashBoard'>
                            {/* <img src="./Dashboardicon.png" alt="" /> */}
                            <h3>Dashboard</h3>
                        </div>
                        <div className='orders'>
                            <img src="./order.png" alt="" />
                            <h3>Order</h3>
                        </div>
                        <div className='subscribe'>
                            <img src="./subscribe.png" alt="" />
                            <h3>Subscribe</h3>
                        </div>
                    </div>
                </div>
                <div className='logOutContainer'>
                    <div className='logoutHolder'>
                        <img src="./logout.png" alt="" />
                        <h3>logout</h3>
                    </div>
                </div>
            </div>
            <div className='dashBoardRight'>
                <header className='dashBoardHeader'>
                    <div className='dashBoardHeaderWrapper'>
                        <div className='welcomeDavid'>
                        <img src="./profile.png" alt=""  className='images'/>
                        <h3>Welcome David</h3>
                        </div>
                        <div className='notificationHolder'>
                            <img src="./notification.png" alt="" />
                        <img src="./profile.png" alt=""  className='image'/>
                        </div>
                        <h3 className='burgerMenu'>menu</h3>
                    </div>
                </header><hr />
                <div className='dashBoardRightBody'>
                    <div className='dashBoardRightBodyWraaper'>
                        <div className='dashBoardRightBodycard'>
                            <div className='dashBoardCard1'>
                                <h2>TOTAL ORDERS </h2>
                                <h2>20</h2>
                            </div>
                            <div className='dashBoardCard2'>
                                <h2>PENDING ORDERS</h2>
                                <h2>12</h2>
                            </div>
                            <div className='dashBoardCard3'>
                                <h2>COMPLETE ORDERS</h2>
                                <h2>08</h2>
                            </div>
                        </div>
                        <div className='dashBoardRightBodycard2'>
                            <div className='companyNamesContainer'>
                                <div className='one1'>
                                    <h4>COMPANY</h4>
                                </div>
                                <div className='two2'>
                                    <h4>ID</h4>
                                </div>
                                <div className='three3'>
                                    <h4>DATE</h4>
                                </div>
                                <div className='four4'>
                                    <h4>STATUS</h4>
                                </div>

                            </div><hr />
                            <div className='companyBody'>
                                <div className='compayCards1'>
                                    <h4>Cleaneat Laundry</h4>
                                    <h4 className='none'>174776362627MFD</h4>
                                    <h4 className='none'>25/01/2024</h4>
                                    <h4 className='pending'>Pending.....</h4>
                                    <div className='noneHolder'>
                                        <h4>174776362627MFD</h4>
                                        <h4>25/01/2024</h4>
                                    </div>
                                    <img src="./deleteBtn.png" alt="" />
                                </div>
                                <div className='compayCards2'>
                                    <h4>Cleaneat Laundry</h4>
                                    <h4 className='none'>174776362627MFD</h4>
                                    <h4 className='none'>25/01/2024</h4>
                                    <h4 className='Completed'>Completed</h4>
                                    <div className='noneHolder'>
                                        <h4>174776362627MFD</h4>
                                        <h4>25/01/2024</h4>
                                    </div>
                                    <img src="./deleteBtn.png" alt="" />
                                </div>
                                <div className='compayCards3'>
                                    <h4>Cleaneat Laundry</h4>
                                    <h4 className='none'>174776362627MFD</h4>
                                    <h4 className='none'>25/01/2024</h4>
                                    <h4 className='Completed'>Completed</h4>
                                    <div className='noneHolder'>
                                        <h4>174776362627MFD</h4>
                                        <h4>25/01/2024</h4>
                                    </div>
                                    <img src="./deleteBtn.png" alt="" />
                                </div>
                                <div className='compayCards4'>
                                <h4>Cleaneat Laundry</h4>
                                    <h4 className='none'>174776362627MFD</h4>
                                    <h4 className='none'>25/01/2024</h4>
                                    <h4 className='Completed'>Completed</h4>
                                    <div className='noneHolder'>
                                        <h4>174776362627MFD</h4>
                                        <h4>25/01/2024</h4>
                                    </div>
                                    <img src="./deleteBtn.png" alt="" />
                                </div>
                                <div className='compayCards5'>
                                       <h4>Cleaneat Laundry</h4>
                                    <h4 className='none'>174776362627MFD</h4>
                                    <h4 className='none'>25/01/2024</h4>
                                    <h4 className='Completed'>Completed</h4>
                                    <div className='noneHolder'>
                                        <h4>174776362627MFD</h4>
                                        <h4>25/01/2024</h4>
                                    </div>
                                    <img src="./deleteBtn.png" alt="" />
                                </div>
                                <div className='compayCards6'>
                                    <h4>Cleaneat Laundry</h4>
                                    <h4>174776362627MFD</h4>
                                    <h4>25/01/2024</h4>
                                    <h4 className='Completed'>Completed</h4>
                                    <img src="./deleteBtn.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoad
