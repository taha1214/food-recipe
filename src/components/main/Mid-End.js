import "../../App.css";
import React from 'react';
import first from "../../assets/pics/endfirst.jpeg"
import second from "../../assets/pics/endsec.jpeg"
import third from "../../assets/pics/endthird.jpeg"
import fourth from "../../assets/pics/endfourth.jpeg"
import fifth from "../../assets/pics/endfive.jpeg"
import sixth from "../../assets/pics/end six.jpeg"
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const MidEnd = () => {
    return(
        <div>
            <div className="mid-container">
                <div className="mid-heading"><h1>Explore recipes</h1></div>
                <div className="mid-view"><h2>view more</h2></div>
                <div className="mid-card"><Card
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
                             title= {<h4 className="title">grilled red snapper</h4>}
                            avatar={<Avatar className="ava" src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            description={<h3 className="haedi">alex martin</h3>}
                            ></Meta>
                        </Card></div>

            </div>
        </div>
    )

}
export default MidEnd;