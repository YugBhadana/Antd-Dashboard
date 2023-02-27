import React from 'react'
import { DualAxes} from '@ant-design/plots';
import { Card, Col, Row, Select, Typography } from 'antd';
import { userActivityData } from './UserActivityData';
const UserActivity = () => {
console.log("USER ACT" , userActivityData)
const config = {
    data: [userActivityData , userActivityData],
    height:200,
    xField: 'year',
    yField: ['current', 'previous'],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
  };


  return (
<Row className="user-activity-container" >
            <Col span={24}>
                <Card hoverable>
                    <Row >
                        <Col span={24}>
                            <Row>
                                <Col span={16}>
                                    <span>
                                        <Typography.Text strong>User Activity</Typography.Text>
                                    </span>
                                </Col>
                                <Col span={8} className="text-end">
                                    <Select defaultValue="weekly" bordered={false}>
                                        <Select.Option value="weekly">Weekly</Select.Option>
                                        <Select.Option value="monthly">Monthly</Select.Option>
                                        <Select.Option value="yearly">Yearly</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Typography.Text strong type='secondary'>This Month</Typography.Text>
                        </Col>
                        <Col span={24}>
                            <Typography.Title level={4} >
                               26500
                            </Typography.Title>
                        </Col>
                        <Col span={24} >
                            <DualAxes {...config} />
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
  )
}

export default UserActivity