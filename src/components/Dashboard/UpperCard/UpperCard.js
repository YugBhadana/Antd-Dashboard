import React from 'react'
import { Card, Col, Row, Typography } from 'antd';
const UpperCard = ({title , value , percentage , icon , currency}) => {
  return (
    <Card hoverable>
            <Row>
                <Col xxl={6} lg={6} md={4} xl={6} xs={6}>
              
                   {icon}

                  
                </Col>
                <Col xxl={18} lg={18} md={20} xl={18} xs={18} >
                    <Row>
                        <Col span={24}>
                            <Typography.Title level={5} type="secondary">{title}</Typography.Title>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={12}>
                                    <Typography.Title level={5} className='uppercard-value'>
                                        {currency ?  value : value}
                                    </Typography.Title>
                                </Col>
                                <Col span={12} className='percentage-container'>
                                    <span className={percentage < 0 ? 'loss' : 'profit'}>
                                        <Typography.Text strong type={percentage < 0 ? 'danger' : 'success'}>
                                            {percentage > 0 ? `+${percentage}` : percentage}%
                                        </Typography.Text>
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
  )
}

export default UpperCard