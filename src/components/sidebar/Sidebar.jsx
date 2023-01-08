import React from 'react'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { 
    DashboardIcon,
    CommunicationIcon,
    ConstructionsIcon,
    DigitalLiteracyIcon,
    GirlsScholarshipIcon,
    LifeSkillIcon,
    RenovationIcon,
    ReportsIcon,
    SettingsIcon,
    StrenghIcon
 } from '../../assets/icons/Icons.jsx'


const Links = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon />,
        path: '/dashboard'
    },
    {
        name: 'Constructions',
        icon: <ConstructionsIcon />,
        path: '/constructions'
    },
    {
        name: 'Renovations',
        icon: <RenovationIcon />,
        path: '/renovations'
    },
    {
        name: 'Communication',
        icon: <CommunicationIcon />,
        path: '/communication'
    },
    {
        name: 'Life Skill',
        icon: <LifeSkillIcon />,
        path: '/life-skill'
    },
    {
        name: 'Digital Literacy',
        icon: <DigitalLiteracyIcon />,
        path: '/digital-literacy'
    },
    {
        name: 'Girls Scholarship',
        icon: <GirlsScholarshipIcon />,
        path: '/girls-scholarship'
    },
    {
        name: 'System Strenghtening',
        icon: <StrenghIcon />,
        path: '/systems-strenghtening'
    },
    {
        name: 'Reports',
        icon: <ReportsIcon />,
        path: '/reports'
    },
    
]

function Sidebar(props) {
  return (
    <StyledPage>
        <StyledSideBar>
            <StyledLogo>
                <img src={logo} alt='pims logo' />
            </StyledLogo>
            {
                Links.map((link) => {
                    return (
                            <StyledLink
                                key={link.name}
                                to={link.path}
                                activeClassName="active"
                            >
                                {link.icon}
                                <span
                                    style={{marginLeft:'14px'}}
                                >
                                    {link.name}

                                </span>
                            </StyledLink>
                    )
                })
            
            }
            
                <StyledSettingsLink>
                    <SettingsIcon />
                    <span
                        style={{marginLeft:'14px'}}
                    >
                        Settings
                    </span>
                </StyledSettingsLink>
        </StyledSideBar>
        {props.children}
    </StyledPage>
  )
}

export default Sidebar

const StyledSideBar = styled.div`
    /* height: 100%; */
    min-width: 220px;
    padding: 22px 0;
    background-color: #D9D9D917;
    position: relative;
`
const StyledLogo =styled.div`
    margin: 16px 14px 70px 22px;
`
const StyledPage = styled.div`
    display: flex;
    height: 100%;
`
const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 20px 24px;
    /* margin-bottom: 17px; */
    transition: 0.2s all ease-out;
    &.${props => props.activeClassName} {
        color: #3A3A3A;
        background-color: #8282821A;
        border-radius: 10px;
  }
    &:hover{
        color: #3A3A3A;
        background-color: #8282821A;
        border-radius: 10px;
    }
`

const StyledSettingsLink = styled(StyledLink)`
    position: fixed;
    bottom: 0;
`