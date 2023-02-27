import React , {useState} from 'react';
import {
    CalendarOutlined, DatabaseOutlined, FileOutlined, MessageOutlined, PieChartOutlined,
    TeamOutlined,
    UserOutlined , MailOutlined , PaperClipOutlined , ContactsOutlined , ProjectOutlined 
} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import './Main.scss';
import Dashboard from '../Dashboard/Dashboard';
import useMediaQuery from '@mui/material/useMediaQuery';

const { Sider } = Layout;

function getMenuItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getMenuItem('Dashboard', 'dashboard', <PieChartOutlined />, [
        getMenuItem('Ecommerce', 'ecom'),
        getMenuItem('Saas', 'saas'),
        getMenuItem('Crypto', 'crypto'),
    ]),
    getMenuItem('Calendar', 'calendar', <CalendarOutlined />),
    getMenuItem('Chat', 'chat', <MessageOutlined />),
    getMenuItem('File Manager', 'file-manager', <DatabaseOutlined />),
    getMenuItem('Ecommerce', 'ecommerce', <UserOutlined />, [
        getMenuItem('Product', '3'),
        getMenuItem('Bill', '4'),
        getMenuItem('Shippment', '5'),
    ]),
    getMenuItem('Team', 'sub2', <TeamOutlined />, [getMenuItem('Team A', '6'), getMenuItem('Team B', '8')]),
    getMenuItem('Files', '6', <FileOutlined />),
    getMenuItem('Email', '7', <MailOutlined />),
    getMenuItem('Invoices', '8', <PaperClipOutlined />),
    getMenuItem('Projects', '9', <ProjectOutlined />),
    getMenuItem('Contacts', '10', <ContactsOutlined />),
];

const Main = () => {

    const isMobile = useMediaQuery('(max-width:500px)')
    console.log("MOBILE", isMobile)

    const [collapsed, setCollapsed] = useState(false);

  return <Layout
  style={{
      minHeight: '100vh',
  }}
>
  <Sider
      collapsible
      breakpoint="md"
      collapsedWidth="0"
      collapsed={collapsed}
      zeroWidthTriggerStyle={{ top: '14px' }}
      className="layout-sider-container"
      onCollapse={(value) => {
          setCollapsed(value)
        
      }}
  >
      
      <div
         >
          <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
      </div>
  </Sider>
  <Layout className="site-layout">
      <Layout.Content className={`dashboard-content-container`}>
{
    isMobile ? (collapsed? <Dashboard collapsed={collapsed} category='Dashboard' />:null) : <Dashboard collapsed={collapsed} category='Dashboard' />
}

{/* && 
collapsed || */}
      </Layout.Content>
  </Layout>
</Layout>
}

export default Main