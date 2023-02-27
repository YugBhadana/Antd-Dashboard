import React from 'react';
import { AppstoreTwoTone, BellTwoTone, FlagTwoTone, GithubFilled, SearchOutlined, SettingTwoTone  } from '@ant-design/icons';
import { Col, notification, Row, Space, Typography } from 'antd';
import UpperCard from './UpperCard/UpperCard';
import OrderStatus from './OrderStatus/OrderStatus';
import OverviewCard from './Overview/Overview';
import TopProducts from './TopProducts/TopProducts';
import UserActivity from './UserActivity/UserActivity';
import UserDetailSection from './UserDetailSection/UserDetailSection';
import { upperCardData } from './UpperCard/UpperCardData';



const Dashboard = ({ category = 'Dashboard' , collapsed}) => {
    console.log("collapsed value",collapsed);
    // const siderCollapse = useSelector(state => state.data.siderCollapse)
    // const { height, width } = useWindowDimensions();
  
  return (
    <>
            <div>
                <Row className='dashboard'>
                    <Col span={24}>
                        <Row>
                            <Col span={12} className='pl-20'>
                                <div>
                                    <Typography.Title level={3} italic underline className='color-1890ff cursor-default'>
                                        {category}
                                    </Typography.Title>
                                </div>
                            </Col>
                            <Col span={12} align='end'>
                                <Space size={'large'} className={'header-icons'}>
                                    <GithubFilled onClick={() => window.open('https://github.com/YugBhadana', "_blank")} />
                                
                                        <SearchOutlined />
                                        <FlagTwoTone />
                                        <AppstoreTwoTone />
                               
                                    <BellTwoTone onClick={() => notification.open({
                                        message: <strong>Beta Version</strong>,
                                        description: <div><strong>In Testing phase </strong> </div>,
                                    })} />
                                    <SettingTwoTone />
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={18} xxl={18} lg={18} md={collapsed ? 16 : 24} sm={24} >
                        <Row >
                            {upperCardData.map((data, index) => {
                                return <Col xl={8} xxl={8} lg={8} md={24} sm={24} xs={24} key={index} className='level-1-cards-container'>
                                    <div>
                                        <UpperCard
                                            {...data}
                                        />
                                    </div>
                                </Col>
                            })}
                            <Col span={24} className='p-10'>
                                <div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 }}>
                                    <OverviewCard />
                                </div>
                            </Col>
                            <Col span={24}>
                                <Row>
                                    <Col xl={8} lg={12} className='p-10'>
                                        <div>
                                            <UserActivity />
                                        </div>
                                    </Col>
                                    <Col xl={8} lg={12} className='p-10'>
                                        <div>
                                            <OrderStatus />
                                        </div>
                                    </Col>
                                    <Col xl={8} lg={12} className='p-10'>
                                        <div>
                                            <TopProducts />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={collapsed ? 8 : 24} sm={24} xs = {24} className='p-10'>
                        <div>
                            <UserDetailSection />
                        </div>
                    </Col>
                </Row >
            </div>
        </>
  )
}

export default Dashboard