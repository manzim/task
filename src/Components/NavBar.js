import { Button, Menu, MenuItem, Drawer } from '@blueprintjs/core'
import React, { useEffect, useState} from 'react';
import { Popover2 } from '@blueprintjs/popover2';
import { useHistory } from 'react-router-dom';

import CompanyLogo from '../assets/companylogo.png'

import './External.css'

function NavBar() {
    
    let history=useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    function PopOverDhamaka() {
        return (
            <div>
                <Popover2
                    position="bottom-left"
                    content={
                        <Menu >
                            <MenuItem>Hellow</MenuItem>
                            <MenuItem>hi</MenuItem>
                            <MenuItem>this is it</MenuItem>
                        </Menu>
                    }
                    target={
                        <Button
                            text="..."
                            intent="none"
                            icon="user"
                            rightIcon="chevron-down"
                            className="tc f6"
                        />
                    }
                />
            </div>
        )
    }
    return (
        <div className="cf bg-near-white  shadow-4">
            <nav className="bp3-navbar .modifier cf dt ">
                <div className="_logoGrp_ bp3-navbar-group bp3-align-left dtc-l dtc-m dtc">
                    <div className="bp3-navbar-heading">
                        <img 
                            src={CompanyLogo} 
                            alt="compnay logo" 
                            className="mw4"    
                        />
                    </div>
                </div>
                <div className="_featureGrp_ bp3-navbar-group bp3-align-right dtc-l dtc-m dn">
                    <button className="bp3-button bp3-minimal ">Explore</button>
                    <button className="bp3-button bp3-minimal ">Discover</button>
                    <button className="bp3-button bp3-minimal ">For Professionals</button>
                    <button className="bp3-button bp3-minimal mr2" onClick={() => 
                        <Popover2
                            position="bottom-left"
                            content={
                                <Menu >
                                    <MenuItem>Hellow</MenuItem>
                                    <MenuItem>hi</MenuItem>
                                    <MenuItem>this is it</MenuItem>
                                </Menu>
                            }
                            target={
                                <Button
                                    text="..."
                                    intent="none"
                                    minimal={true}
                                    // icon="user"
                                    // rightIcon="chevron-down"
                                    className="tc f6"
                                    onClick={(e) => PopOverDhamaka(e)}
                                />
                            }
                        /> 
                    }>...</button>  
                    <button className="bp3-button bp3-minimal  outline br3">Submit Photos</button>
                    <span className="bp3-navbar-divider b ml3"></span>
                    <button className="bp3-button bp3-minimal b">Login</button>
                    <Button className="b" intent="warning" text="Join Free" />
                </div>
                <div className="drawer_button bn fr pt3">
                    <Button
                        icon="menu"
                        className="gray tr-m tr-l tr"
                        // onClick={() => setOpen(true)}
                        active={false}
                        minimal={true}
                        fill={true}
                        intent="none"
                        color="#3b3b3b"
                    />

                    <Drawer
                        className="flex flex-column bg-near-white"
                        isOpen={false}
                        size={"260px"}
                        style={{ backgroundColor: '#EEEEEE', zIndex: 999 }
                        }
                        vertical={false}
                        canOutsideClickClose={true}
                        // onClose={() => setOpen(false)}
                        position={"left"}
                        hasBackdrop={true}
                    >
                        <div className="logo_img tc center mb3 mt5" style={{ opacity: 1 }}>
                            <img
                                className="tc center"
                                style={{
                                    height: "inherit",
                                    width: "220px",
                                    opacity: 1
                                }
                                }
                                src={CompanyLogo}
                                alt={`task`}
                                // onClick={() => { history.push("/"); }}
                            />

                        </div>

                        <div className="fl ">
                            <ul className="pages fl flex flex-column">
                                <li className=""> Explore </li>
                                <li className=""> Discover </li>
                                <li className=""> For Professionals </li>
                                <li className=""> Submit Photos </li>
                                <li className=""> Login </li>
                                <li className=""> Register </li>
                            </ul>
                        </div>
                    </Drawer>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
