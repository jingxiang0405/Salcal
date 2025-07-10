import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { FaHome, FaThList } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './Leftbar.module.css'
export default function Leftbar() {
    const [collapsed, setCollapsed] = useState(false)

    const navigate = useNavigate();
    return (
        <Sidebar className={styles.sidebar} collapsed={collapsed} transitionDuration={300}>
            <Menu>
                <MenuItem onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? '展開' : '收合'}
                </MenuItem>

                <MenuItem
                    icon={<FaHome />}

                    onClick={() => {L navigate('/') }}
                >
                    首頁
                </MenuItem>

                <MenuItem
                    icon={<FaThList />}
                    onClick={() => { navigate('/scheme') }}
                >
                    方案
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}

