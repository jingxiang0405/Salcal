import { styled } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { FaHome, FaThList } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StyledSidebar = styled(Sidebar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    height: '100vh',
}));

export default function Leftbar() {
    const [collapsed, setCollapsed] = useState(false)

    const navigate = useNavigate();
    return (
        <StyledSidebar collapsed={collapsed} transitionDuration={300}>
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
        </StyledSidebar>
    )
}

