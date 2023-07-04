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
            </ProSidebar>
        </>
    )
}

export default SideBar;