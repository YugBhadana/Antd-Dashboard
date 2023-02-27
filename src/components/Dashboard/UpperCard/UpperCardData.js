import {FolderOpenFilled, PieChartFilled, UserOutlined} from '@ant-design/icons' 

export const upperCardData = [
    {
        title: 'Revenue',
        data: 'revenue',
        icon: <div className='upper-icon-container'> <PieChartFilled /></div>,
        currency: true , 
        value:2535 ,
        percentage:1.20
    },
    {
        title: 'Orders',
        data: 'orders',
        icon: <div className='upper-icon-container'> <FolderOpenFilled /></div>,
        value:7837,
        percentage:-0.56
    }, {
        title: 'Customers',
        data: 'customers',
        icon: <div className='upper-icon-container'> <UserOutlined /></div>,
        value:2310,
        percentage:0.9
    },
]