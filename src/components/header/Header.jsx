import React from 'react'
import styled from 'styled-components'
import { NotifIcon, SortIcon, UsersIcon } from '../../assets/icons/Icons'
import { Searchbar } from '../Searchbar'
import profileImg from '../../assets/Profil.png'


function Header(props) {
  return (
    <>
    <StyledPage>
      <StyledHeader>
        <StyledTextHeader>IEC Materials</StyledTextHeader>
        <Searchbar />
        <StyledButton>
            <UsersIcon />
            <span style={{marginLeft: '14px'}}>Users</span>
        </StyledButton>

        <StyledButton>
        <label 
          htmlFor='sort'
          style={{display:'flex', alignItems:'center'}}
        >
          <SortIcon />
          <span
            style={{marginLeft:'14px'}}
          >Sort By: </span>
          </label>
          <StyledSelect name="cars" id="sort">
            <option value="" selected disabled hidden>LGA</option>
            <option value="saab">Supervisor</option>
            <option value="audi">No. of Materials</option>
            <option value="audi">No. of Beneficiaries</option>
          </StyledSelect>
        </StyledButton>

        <StyledButton>
          <NotifIcon />
          <ProfileImg src={profileImg} />
        </StyledButton>
      </StyledHeader>

      {props.children}
      </StyledPage>
    </>
  )
}

export default Header

const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const StyledHeader = styled.div`
  height: 132px;
  /* width: 100%; */
  display: flex;
  align-items: center;
  padding: 0 33px;
  background-color: #8E92BC12;
  justify-content: space-between;
`
const StyledTextHeader = styled.h1`
  font-weight: 400px;
`
const StyledButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
`
const StyledSelect = styled.select`
  background: none;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
`
const ProfileImg = styled.img`
  border-radius: 100%;
`