import React from 'react'
import { Card, Typography, Row, Col, Select, Divider } from 'antd';
import { products} from './ProductsData'
const TopProducts = () => {
  return (
    <Row className={'top-products-container'}>
    <Col span={24}>
        <Card hoverable>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={16}>
                            <span>
                                <Typography.Text strong>Top Products</Typography.Text>
                            </span>
                        </Col>
                        <Col span={8} className="text-end">
                            <Select defaultValue="weekly" bordered={false}>
                                <Select.Option value="weekly">Weekly</Select.Option>
                                <Select.Option value="weekly">Monthly</Select.Option>
                                <Select.Option value="weekly">Yearly</Select.Option>
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row className="products-list">
                        {products.map((product, index) => {
                            return <Col span={24} className='top-product-element pt-10' key={index}>
                                <Row>
                                    <Col span={4} className='top-product-rank'>
                                        <Typography.Text strong className="rank-text">#{index + 1}</Typography.Text>
                                    </Col>
                                    <Col span={20}>
                                        <Row>
                                            <Col span={16} className='top-product-info'>
                                                <Row>
                                                    <Col span={24}>
                                                        <Typography.Text type="secondary" ellipsis={{ tooltip: 'true' }}>{product.name}</Typography.Text>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Typography.Text strong>{product.price}</Typography.Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={8} className='text-end'>
                                                <Typography.Text strong className='recent-activity-date-part products-count-sold'>{product.quantitySold}</Typography.Text>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Divider className='order-status-divider' />
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

export default TopProducts