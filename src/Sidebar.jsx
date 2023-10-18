import React from 'react'
import 
{ BsFillArchiveFill, BsPeopleFill,BsChevronRight,BsChevronDown}
 from 'react-icons/bs'
 import { TbDiscount2 ,TbAssembly,TbSquareKey,TbUserSquareRounded} from "react-icons/tb";
 import { MdOutlineLiveHelp } from "react-icons/md";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <TbAssembly  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbSquareKey className='icon'/> Dashboard  
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                    <BsChevronRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbUserSquareRounded className='icon'/> Customers
                    <BsChevronRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Income
                    <BsChevronRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbDiscount2 className='icon'/> Promote
                    <BsChevronRight className='icon'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineLiveHelp className='icon'/> Help
                    <BsChevronRight className='icon'/>
                </a>
            </li>
            
             
        </ul>
        <li className='sidebar-list-item'>
                <a href="">
                
                    <span className='sidebar-botome'><img  width="20" height="20" /> Evano </span>
                    <span className='sidebar-botome'><h3> Project maneger <BsChevronDown className='icon'/></h3> 
                     
                     </span>  
                </a>
        </li>
        
    </aside>
  )
}

export default Sidebar