import { Button } from '@blueprintjs/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import Carousel from 'react-grid-carousel'
import { Container, Typography } from '@material-ui/core'

import './External.css'

function SecondDiv() {

    let history = useHistory();

    const [value, setValue] = useState('sort by')

    const settings = {
        cols: 3,
        rows: 1,
        gap: 10,
        responsiveLayout: [
            {
                breakpoint: 1050,
                settings: {
                    cols: 2,
                    rows: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    cols: 1,
                    rows: 1
                }
            },
        ]
    }

    return (
        <div>
            <section className="_secondBlock_ bg-near-white w-80-l w-70-m w-100 center ">
                <div class="pa2 w-100 tl-l tl-m tc ">
                    <span className="b mb3"> Top Categories</span>
                    <Container>
                        <Carousel {...settings} cols={3} rows={1} gap={10}
                        >
                            <Carousel.Item>
                                <img alt="winter" width="100%" height="50%"
                                    src="https://s3.amazonaws.com/images.seroundtable.com/google-rainbow-texture-1491566442.jpg" />
                                <Typography
                                    variant="body2"
                                    component="h6"
                                    style={{ color: 'black' }}>
                                    anything
                                </Typography>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" height="50%" alt="summer"
                                    src="https://www.cnet.com/a/img/pLwWAw3f1OdjhUWe1-u0jcqhIcI=/1200x630/2019/09/10/d3dc3047-4c7f-499e-8b8c-240b3e27c6d2/google-logo-6.jpg" />
                                <Typography
                                    variant="body2"
                                    component="h6"
                                    style={{ color: 'black' }}>
                                    anything
                                </Typography>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img width="100%" height="50%" alt="anything"
                                    src="https://www.cnet.com/a/img/pLwWAw3f1OdjhUWe1-u0jcqhIcI=/1200x630/2019/09/10/d3dc3047-4c7f-499e-8b8c-240b3e27c6d2/google-logo-6.jpg" />
                                <Typography
                                    variant="body2"
                                    component="h6"
                                    style={{ color: 'black' }}>
                                    anything
                                </Typography>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="anything" width="100%" height="50%"
                                    src="https://s3.amazonaws.com/images.seroundtable.com/google-rainbow-texture-1491566442.jpg" />
                                <Typography
                                    variant="body2"
                                    component="h6"
                                    style={{ color: 'black' }}>
                                    anything
                                </Typography>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="anything" width="100%" height="50%"
                                    src="https://www.cnet.com/a/img/pLwWAw3f1OdjhUWe1-u0jcqhIcI=/1200x630/2019/09/10/d3dc3047-4c7f-499e-8b8c-240b3e27c6d2/google-logo-6.jpg" />
                                <Typography
                                    variant="body2"
                                    component="h6"
                                    style={{ color: 'black' }}>
                                    anything
                                </Typography>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="anything" width="100%" height="50%"
                                    src="https://s3.amazonaws.com/images.seroundtable.com/google-rainbow-texture-1491566442.jpg" />
                                <Typography
                                    variant="body2"
                                    component="h6"
                                    style={{ color: 'black' }}>
                                    anything
                                </Typography>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </div>
                <div class="pa2 w-100 flex b ">
                    <div className="tl">
                        <span className="mr2" > All </span>
                        <span className="mr2" > Photos </span>
                        <span className="mr2" > Videos </span>
                        <span className="mr2" > Freebies </span>
                        <span className="mr2" > 360 </span>
                    </div>
                    <div className="_sort_ tr">
                        <select  className="fr tr" >
                            <option value="" disabled selected hidden>select</option>
                            <option > highest </option>
                            <option > highest </option>
                            <option > highest </option>
                        </select>
                    </div>
                </div>
                <div class="cf pa4">
                    <div class="fl w-100 w-50-ns ph2">
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters030211_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="no-underline pv2 grow db"><img c
                                lass="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/elevaters.jpg" />
                        </a>
                        <a href="#" class="no-underline pv2 grow db"><img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/pink-and-noseworthy-22.12.10-cargo_960.jpg" /></a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg" />
                        </a>
                    </div>
                    <div class="fl w-50 w-25-ns ph2">
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw18-240112-cc_960.jpg" /> </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw-residency-cargo_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/orchid-2-mnkr_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/O270711_960-2.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-020510_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-130610_960.jpg" />
                        </a>
                    </div>
                    <div class="fl w-50 w-25-ns ph2">
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zach-hurd-101218_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/cc-shanee_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/ZachHurd-190111s_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/hw170211pie-cargo_960.jpg" />
                        </a>
                        <a
                            href=""
                            class="pv2 grow db no-underline black">
                            <img class="db w-100" src="https://s3-us-west-2.amazonaws.com/prnt/adam-stern-191110_960.jpg" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SecondDiv
