import React from 'react'

import './External.css'
import LandingImage from '../assets/landingBlock.jpg'
import { Button, Menu, MenuItem } from '@blueprintjs/core'
import { Popover2 } from '@blueprintjs/popover2'

function LandingBlock() {

    function popOver() {
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
                            minimal={true}
                            // icon="user"
                            // rightIcon="chevron-down"
                            className="tc f6"
                            onClick={(e) => popOver(e)}
                        />
                    }
                />
            </div>
        )
    }
    return (
        <div className="pa3">
            <section
                className="_landingBlcok_ vh-100 dt w-100 "
                style={{
                    backgroundImage: `url(${LandingImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: .875
                }}
            >
                <div className="dtc v-mid tc white ph3 ph4-l">
                    <div className="white b f1-l f4-m f5 w-70-l w-70-m w-80 center-l center-m center mb3">
                        your local source of high quality photos and videos directly from their creators
                    </div>
                    <div className="bp3-input-group .modifier w-70-l w-70-m w-80 center">

                        <input
                            className="bp3-input w-10 center pa3"
                            type="search"
                            placeholder="Search Photos and Videos"
                            dir="auto"
                        />

                        <span className="bp3-icon bp3-icon-search"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingBlock
