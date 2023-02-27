import React from 'react';
import { Gauge } from '@ant-design/plots';
import { Card, Avatar, Image, Col, Typography, Row, Divider, Tooltip, } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';
import { userDetails } from './UserDetails';
const  backgroundURL = 'http://hd.wallpaperswide.com/thumbs/business_plan-t2.jpg';
const profilePicURL = 'https://images.unsplash.com/photo-1555728750-9c6ad51b968d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60';
const UserDetailSection = () => {
    const config = {
        percent: userDetails.earning.currentPercent / 100,
        range: {
            color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        indicator: null,
        statistic: {
            title: {
                offsetY: -36,
                style: {
                    fontSize: '36px',
                    color: '#4B535E',
                },
                formatter: () => `${userDetails.earning.currentPercent}%`,
            },
            content: {
                style: {
                    fontSize: '24px',
                    lineHeight: '44px',
                    color: '#4B535E',
                },
                formatter: () => `$${userDetails.earning.total}`,
            },
        },
    };
  return (
    <Card hoverable className='user-card'
    cover={<img className='user-card-cover-image' alt="profileBackground" src={backgroundURL} />}
>
    <Col span={24} className='avatar-image-container'>
        <Avatar className='avatar-image' size={80} src={<Image src={profilePicURL} />} />
    </Col>
    <span style={{position: "absolute" ,  color: "white",top: "-13px",right: "20px", fontSize: "xx-large"}}>...</span>
    <Col span={24} className='text-center'><Typography.Title level={4}>{userDetails.name}</Typography.Title></Col>
    <Col span={24} className='text-center'><Typography.Text type="secondary" strong>{userDetails.designation}</Typography.Text></Col>
    <Col span={24}>
        <Row>
            {userDetails.info.map((info, index) => {
                return <Col span={12} key={index} className='text-center pt-10'>
                    <Row className={index === 0 ? 'border-right-grey' : ''}>
                        <Col span={24}>
                            <Typography.Title level={4}>{info.value}</Typography.Title>
                        </Col>
                        <Col span={24}>
                            <Typography.Text type="secondary" strong>{info.label}</Typography.Text>
                        </Col>
                    </Row>
                </Col>
            })}
        </Row>
    </Col>
    <Col span={24}>
        <Divider />
    </Col>
    <Col span={24}>
        <Row>
            <Col span={12}>
                <Typography.Text strong>Earning</Typography.Text>
            </Col>
            <Col span={12} className='text-end'>
                <Tooltip title='Earning Details'>
                    <InfoCircleTwoTone />
                </Tooltip>
            </Col>
        </Row>
    </Col >
    <Col span={24} className='earning-chart-container'>
        <Gauge {...config} />
    </Col>
    <Col span={24} className='text-center pt-10'>
        <Typography.Text type="secondary" >Earning this month</Typography.Text>
    </Col>
    <Col span={24} className='text-center' style={{marginTop:'1.5rem'}}>
        <Typography.Text type="secondary" >
            <span className='percentage-container'>
                <span className='profit'>
                    <Typography.Text strong type='success'>
                       +${userDetails.earning.prevPercentRelative}
                    </Typography.Text>
                </span>
            </span>
            From previous period
        </Typography.Text>
    </Col>
    <Col span={24}>
        <Divider />
    </Col>
    <Col span={24}>
        <Typography.Text strong>Recent Activity</Typography.Text>
    </Col>
    <Col span={24}>
        {userDetails.recentActivities.map((act, index) => {
            return <Row className={'pt-10'} key={index}>
                <Col span={6}>
                    <Row className={'recent-activity-date-part'}>
                        <Col span={24}>
                            <Typography.Text strong>
                                {act.date[0]}
                            </Typography.Text>
                        </Col>
                        <Col span={24}>
                            <Typography.Text strong>
                                {act.date[1]}
                            </Typography.Text>
                        </Col>
                    </Row>
                </Col>
                <Col span={18}>
                    <Typography.Text className={'pl-10'} type='secondary' strong ellipsis={{ tooltip: true }}>
                        {act.desc}
                    </Typography.Text>
                </Col>
            </Row>
        })}
    </Col>
</Card >
  )
}

export default UserDetailSection