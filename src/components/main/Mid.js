import Image from "../../assets/pics/close-up-food-lover-taking-pictures-meal_23-2149286403.avif"
import "../../App.css";
import React from 'react';
import  first  from "../../assets/pics/first.jpeg";
import  second from "../../assets/pics/second.jpeg";
import  third from "../../assets/pics/third.jpeg";
import  fourth from "../../assets/pics/fourth.jpeg";
import  fifth from "../../assets/pics/fifth.jpeg";
import  sixth from "../../assets/pics/sixth.jpeg";
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const Mid = () => {
    return(
        <div>
            <div className="mid-container">
                <div><img className="mid-pic" src={Image} alt="example"></img></div>

                <div className="mid-para">
                <h1>share your recipes</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit </p>
                 <button className="mid-but">create your recipes</button>
                </div>
                <div className="mid-heading"><h1> trending recipes</h1></div>
                <div className="mid-view"><h2>view more</h2></div>
                <div className="mid-card">
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

            </div>
        </div>
    )

}
export default Mid;