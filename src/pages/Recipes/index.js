import  first  from"../../assets/pics/first.jpeg";
import  second from "../../assets/pics/second.jpeg";
import  third from "../../assets/pics/third.jpeg";
import  fourth from "../../assets/pics/fourth.jpeg";
import  fifth from "../../assets/pics/fifth.jpeg";
import  sixth from "../../assets/pics/sixth.jpeg";

import firstEnd from "../../assets/pics/endfirst.jpeg";
import secondEnd from "../../assets/pics/endsec.jpeg";
import thirdEnd from "../../assets/pics/endthird.jpeg";
import fourthENd from "../../assets/pics/endfourth.jpeg";
import fifthENd from "../../assets/pics/endfive.jpeg";
import sixthEnd from "../../assets/pics/end six.jpeg";

import Navbar from "../../components/navbar/index";
import React from "react";
import "../../App.css";
import { Avatar, Card } from 'antd';
import Footer from "../../components/FooterEnd/index";
const { Meta } = Card;



const Recipes = () => {
    return(
        <div>
        <div>
            <Navbar />
            </div>
            <div>
            <div className="mid-heading"><h1> trending recipes</h1></div>
                <div className="rep-card mid-card">
                            <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={first}
                            />
                        
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                           <Meta
                             title= {<h4 className="title">onion rings</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={second}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                               <Meta
                             title= {<h4 className="title">toast with tomato</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card><Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={third}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                            <Meta
                             title= {<h4 className="title">hamm egg and rolls-Up </h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                className="card-height"
                                alt="example"
                                src={fourth}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                           <Meta
                             title= {<h4 className="title">chicken ranch wraps</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img 
                                className="card-height"
                                alt="example"
                                src={fifth}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                          <Meta
                             title= {<h4 className="title">tuna mex tuna salad</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={sixth}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                            <Meta
                             title= {<h4 className="title">strawberry and pancake</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card></div>



                        <div className="recEnd-card mid-card"><Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={firstEnd}
                            />
                        
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                               <Meta
                             title= {<h4 className="title">green goddess wraps</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={secondEnd}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                           <Meta
                             title= {<h4 className="title">strawberry and salad</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card><Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                className="card-height"
                                alt="example"
                                src={thirdEnd}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                            <Meta
                             title= {<h4 className="title">copycat california pizza</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                className="card-height"
                                alt="example"
                                src={fourthENd}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                          <Meta
                             title= {<h4 className="title">cherry-berry bowl</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img 
                                className="card-height"
                                alt="example"
                                src={fifthENd}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                          <Meta
                             title= {<h4 className="title">green smoothie</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={sixthEnd}
                            />
                            }
                            // actions={[
                            // <SettingOutlined key="setting" />,
                            // <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            // ]}
                        >
                          <Meta
                             title= {<h4 className="title">grilled red snapper</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card></div>


                                <Footer/>
            </div> 
           </div>
    )
}
export default Recipes;