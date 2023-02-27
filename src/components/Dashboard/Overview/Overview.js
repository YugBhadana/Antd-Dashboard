import React  from 'react'
import { Area } from '@ant-design/plots';
import { Card, Col, Divider, Row, Select, Typography } from 'antd';
import { overviewData , overviewDataInfo} from './OverviewData';
const Overview = () => {
    // console.log("Overview data info " , overviewDataInfo);
    // console.log('overviewData', overviewData);
    const config = {
        xField: 'timePeriod',
        yField: 'value',
        height: 275,
        xAxis: {
            range: [0, 1],
        },
    };

  return (
    <Row >
    <Col span={24}>
        <Card hoverable>
            <Row>
                <Col xxl={8} xl={8} md={24} sm={24}>
                    <Row>
                        <Col span={24}>
                            <Typography.Text strong>Overview</Typography.Text>
                        </Col>
                        <Col span={24} className="pt-20">
                            <Typography.Text strong type="secondary">This Month</Typography.Text>
                        </Col>
                        <Col span={24} className="pt-10">
                            <Row>
                                <Col span={8}>
                                    <Typography.Title level={4} strong >$31,400</Typography.Title>
                                </Col>
                                <Col span={16}>
                                    <span className='percentage-container top5'>
                                        <span className= 'profit'>
                                            <Typography.Text strong type='success'>
                                            +2.18%
                                            </Typography.Text>
                                        </span>
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} className='pt-20'>
                            <Row>
                                {overviewDataInfo.map((info, index) => {
                                    return <Col span={12} key={index} className={' overview-info'}>
                                        <Row className={index % 2 == 0 ? 'border-right-grey' : ''}>
                                            <Col span={24}>
                                                <Typography.Text type='secondary' strong>{info.type}</Typography.Text>
                                            </Col>
                                            <Col span={24}>
                                                <Typography.Title level={4}>{info.value}</Typography.Title>
                                            </Col>
                                            {index < 4 && <Divider />}
                                        </Row>
                                    </Col>
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={16} xl={16} md={24} sm={24}>
                    <Row>
                        <Col span={24} className='text-end' >
                            <Typography.Text strong>Sort By:</Typography.Text>
                            <Select defaultValue="Year" style={{ width: 72 }} bordered={false}
                            >
                                <Select.Option value="Day">Day</Select.Option>
                                <Select.Option value="Month">Month</Select.Option>
                                <Select.Option value="Year">Year</Select.Option>
                            </Select>
                        </Col>
                        <Col span={24}>
                            <Area {...config} data={overviewData} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    </Col>
</Row>
  )
}

export default Overview