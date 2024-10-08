import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserInfo, fetchUserInfo } from '@/store/modules/user'

const { Header, Sider } = Layout

const GeekLayout = () => {
    const navigate = useNavigate()
    const onMenuClick = (route) => {
        console.log(route);
        const path = route.key
        navigate(path)
    }

    // 反向高亮
    // 1. 获取当前路由路径
    const location = useLocation()
    console.log(location.pathname);
    const selectedKey = location.pathname

    // 触发个人用户信息
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch])

    const name = useSelector(state => state.user.userInfo.name)

    // 退出登陆确认回调
    const onConfirm = () => {
        console.log('确认退出');
        dispatch(clearUserInfo())
        navigate('/login')
    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{name}</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm}>
                            <LogoutOutlined /> 退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        selectedKeys={selectedKey}
                        onClick={onMenuClick}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item icon={<HomeOutlined />} key="/">
                            首页
                        </Menu.Item>
                        <Menu.Item icon={<DiffOutlined />} key="/article">
                            文章管理
                        </Menu.Item>
                        <Menu.Item icon={<EditOutlined />} key="/publish">
                            创建文章
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    {/* 二级路由出口 */}
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    )
}

export default GeekLayout