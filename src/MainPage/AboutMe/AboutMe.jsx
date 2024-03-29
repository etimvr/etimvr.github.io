import classes from './AboutMe.module.css';
import portrait from "../../assets/main/portrait.png";
import goose from "../../assets/main/goose.png";
import ramen from "../../assets/main/ramen.png";
import bubbleTea from "../../assets/main/bubble-tea.png";
import chess from "../../assets/main/chess.png";
import {Tag} from "../../components/Tag/Tag.jsx";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes.js";
import heart from "../../assets/main/heart.svg";
import flower from "../../assets/main/flower.svg";
import arrow from "../../assets/main/yellow-arrow.svg";
import dot from "../../assets/main/dot.svg";
import {colors} from "../../colors.js";

export function AboutMe() {
    const navigate = useNavigate();

    return (
        <div className={classes.aboutMe}>
            <div className={classes.inner}>
                <div className={classes.header} id="about-me">ABOUT ME</div>
                <div style={{marginBottom: 60}}/>
                <div className={classes.verticalSplit}>
                    <div className={classes.picture1}><img src={portrait} alt="portrait"/></div>
                    <div>
                        <div style={{position: 'absolute', marginLeft: '-35px', marginTop: '-8px'}}><img src={heart}
                                                                                                         alt="heart"/>
                        </div>
                        <div className={classes.text1} style={{zIndex: 2, position: 'relative'}}>Hey, I’m Sasha, a
                            Senior Product and Visual Designer building
                            experiences for Prequel in USA.
                        </div>
                        <div style={{marginBottom: 24}}/>
                        <div className={classes.text2}>More than anything, I thrive amidst ambition, passionate
                            curiosity,
                            humility and joy. I seek brave teams where, together, we can create lasting and meaningful
                            impact on people's lives, the society, and the world we live in.
                        </div>
                        <div style={{marginBottom: 48}}/>
                        <div className={classes.text3}>Skills</div>
                        <div style={{marginBottom: 24}}/>
                        <div className={classes.skillsTable}>
                            <Tag>Product Design</Tag>
                            <Tag>Interaction</Tag>
                            <Tag>Research</Tag>
                            <Tag>Branding</Tag>
                            <Tag>Mentoring</Tag>
                            <Tag>Design Strategy</Tag>
                            <Tag>Graphic Design</Tag>
                            <Tag>3D Illustrations</Tag>
                        </div>
                        <div style={{position: 'absolute', marginLeft: '785px', marginTop: '-90px'}}><img src={flower}
                                                                                                          alt="flower"/>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 50}}/>
                <div className={classes.verticalSplit}>
                    <div className={classes.experience}>
                        <div className={classes.text4}>Experience</div>
                        <div style={{marginBottom: 32}}/>

                        <div style={{display: 'flex'}}>
                            <div style={{marginRight: '12px', marginTop: '5px'}}>
                                <img src={dot} alt="dot"/>
                            </div>
                            <div>
                                <div className={classes.text5}>Prequel • Senior Product Designer • Jan 2023 - present
                                </div>
                                <div style={{marginBottom: 16}}/>
                                <div className={classes.text6}>Part of the design team that completely redesigned,
                                    crafted and shipped the brand new experience for Prequel's numerous products
                                    (Prequel, Gio, Oji, Esti) that’s used by over 5 million people across the world.
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 32}}/>

                        <div style={{display: 'flex'}}>
                            <div style={{marginRight: '12px', marginTop: '5px'}}>
                                <img src={dot} alt="dot"/>
                            </div>
                            <div>
                                <div className={classes.text5}>TechWings • Senior Product Designer • Nov 2020 - Dec 2022
                                </div>
                                <div style={{marginBottom: 16}}/>
                                <div className={classes.text6}>Worked as a product designer, contributing to several
                                    branding and visual design projects for different clients.
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 32}}/>

                        <div style={{display: 'flex'}}>
                            <div style={{marginRight: '12px', marginTop: '5px'}}>
                                <img src={dot} alt="dot"/>
                            </div>
                            <div>
                                <div className={classes.text5}>QLab • UI / UX Designer • Apr 2019 - Oct 2020</div>
                                <div style={{marginBottom: 16}}/>
                                <div className={classes.text6}>Was part of design team in charge of refining our design
                                    system for accessibility, defining guidelines for use, documenting design guidelines
                                    and educating design team.
                                </div>
                            </div>
                        </div>


                        <div style={{marginBottom: 32}}/>

                    </div>
                    <div className={classes.rightSide}>
                        <div className={classes.text4}>Tools & Methods</div>
                        <div style={{marginBottom: 32}}/>
                        <div className={classes.text6}>CustDev, User Testing, Jobs-To-Be-Done, Journey Mapping, iOS /
                            Android Interface Principles, Effective MVP Engineering, Product Architecture, Figma,
                            Sketch, Principle, ProtoPie, Photoshop, Illustrator, After Effects, C4D, Blender, Spline,
                            Notion.
                        </div>
                        <div style={{marginBottom: 32}}/>

                        <div className={classes.text4}>Contacts</div>
                        <div style={{position: 'absolute', marginLeft: '530px', marginTop: '-75px'}}><img src={arrow}
                                                                                                          alt="arrow"/>
                        </div>
                        <div style={{marginBottom: 32}}/>
                        <div className={classes.link}><a href="mailto:sandraovershv@gmail.com"
                                                         style={{color: "black"}}>Email</a></div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.link}><a
                            href="https://www.linkedin.com/in/alexandra-shvetsova-20822a221/"
                            style={{color: "black"}}>LinkedIn</a></div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.link}><a href="https://t.me/pressur"
                                                         style={{color: "black"}}>Telegram</a></div>
                        <div style={{marginBottom: 16}}/>
                    </div>
                </div>
                <div style={{marginBottom: 40}}/>
                <div className={classes.text4}>Some facts about me...</div>
                <div style={{marginBottom: 32}}/>
                <div className={classes.facts}>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={goose} alt="goose"/></div>
                        <div className={classes.text6}>It’s my brother pink goose. We’ve been together for 8 years.
                        </div>
                    </div>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={ramen} alt="ramen"/></div>
                        <div className={classes.text6}>My favourite food is spicy noodles with chicken.</div>
                    </div>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={bubbleTea} alt="bubble-tea"/></div>
                        <div className={classes.text6}>Matcha bubble tea is the most delicious drink ever.</div>
                    </div>
                    <div className={classes.fact}>
                        <div className={classes.picture2}><img src={chess} alt="chess"/></div>
                        <div className={classes.text6}>In my free time I’m learning to play chess.</div>
                    </div>
                </div>
                <div style={{marginBottom: 100}}/>
                <div className={classes.header} id="my-work">MY WORK</div>
                <div style={{marginBottom: 70}}/>
                <div className={classes.works}>
                    <div className={classes.work}>
                        <div className={classes.picture3} style={{backgroundColor: colors.beige}}>
                            <div
                                className={classes.esti}
                                onClick={async() => {
                                    await navigate(routes.esti);
                                    window.scrollTo(0, 0)
                                }}
                            />
                        </div>
                        <div className={classes.text3}>Esti: Aesthetic Photo Editor</div>
                        <div style={{marginBottom: 8}}/>
                        <div className={classes.text6}>The perfect content creator toolkit: an app with consistent vibes
                            in mind.
                        </div>
                        <div style={{marginBottom: 20}}/>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.picture3} style={{backgroundColor: colors.black}}>
                            <div
                                className={classes.prequel}
                                onClick={async() => {
                                    await navigate(routes.prequel);
                                    window.scrollTo(0, 0)
                                }}
                            />
                        </div>
                        <div className={classes.text3}>Prequel: Photo & Video Editor</div>
                        <div style={{marginBottom: 8}}/>
                        <div className={classes.text6}>Photo and video editing app with an easy-to-use creative toolkit,
                            aesthetic effects and filters.
                        </div>
                        <div style={{marginBottom: 20}}/>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.picture3} style={{backgroundColor: colors.lightBlue}}>
                            <div
                                className={classes.admin}
                                onClick={async() => {
                                    await navigate(routes.admin);
                                    window.scrollTo(0, 0)
                                }}
                            />
                        </div>
                        <div className={classes.text3}>Admin Panel / Web</div>
                        <div style={{marginBottom: 8}}/>
                        <div className={classes.text6}>Admin service for internal use by developers, QA engineers and
                            content creators.
                        </div>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.picture3} style={{backgroundColor: colors.lightRed}}>
                            <div
                                className={classes.other}
                                onClick={async() => {
                                    await navigate(routes.otherWorks);
                                    window.scrollTo(0, 0)
                                }}
                            />
                        </div>
                        <div className={classes.text3}>Other works...</div>
                        <div style={{marginBottom: 8}}/>
                        <div className={classes.text6}>Here is a collection of various projects on different themes for
                            the soul and more. ✨
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: 150}}/>
            </div>

        </div>
    )
}

