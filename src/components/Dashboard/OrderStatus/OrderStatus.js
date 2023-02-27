import React from 'react'
import { EllipsisOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/plots';
import { Card, Col, Divider, Row, Typography } from 'antd';
import {orderStatusData} from './OrderStatusData';

const OrderStatus = () => {

      const config = {
        appendPadding: 10,
        orderStatusData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        height:200,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
      };

  

  return (
    <Row className={'order-status-container'}>
    <Col span={24}>
      <Card hoverable>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={16}>
                <span>
                  <Typography.Text strong>Order Stats</Typography.Text>
                </span>
              </Col>
              <Col span={8} className="text-end">
                <Typography.Text strong type="secondary">
                  <EllipsisOutlined />
                </Typography.Text>

              </Col>
            </Row>
          </Col>
          <Col span={24} className='pt-10 order-status-chart' >
            <Pie {...config} data={orderStatusData} />
          </Col>
          <Col span={24}>
            <Divider className='order-status-divider' />
          </Col>
          <Col span={24}>
            <Row>
              {orderStatusData.map((data, index) => {
                return <Col span={8} key={index}>
                  <Row className='text-center'>
                    <Col span={24}>
                      <Typography.Text strong ellipsis={{ tooltip: true }} type='secondary'>{data.type}</Typography.Text>
                    </Col>
                    <Col span={24} className='pt-10'>
                      <Typography.Text strong>{data.value}</Typography.Text>
                    </Col>
                  </Row>
                </Col>
              })}
            </Row>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
  )
}

export default OrderStatus