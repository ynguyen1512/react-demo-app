import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';


const SideBar = () => {
    return (
        <>
            <ProSidebar>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            dashboard
                        </MenuItem>
                        <MenuItem icon={<FaGem />}> components </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            icon={<FaRegLaughWink />}
                        >
                            <MenuItem> 1</MenuItem>
                            <MenuItem> 2</MenuItem>
                            <MenuItem> 3</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </>
    )
}

export default SideBar;