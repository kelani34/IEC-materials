import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchIcon } from '../assets/icons/Icons';

export const Searchbar = () => {
   const [searchInput, setSearchInput] = useState("");

   const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
  return (
    <>
        <StyledSearch>
            <StyledInput 
                placeholder='Search'
            />
            <StyledButton>
                <SearchIconStyled />
            </StyledButton>
        </StyledSearch>
    </>
  )
}

const StyledInput = styled.input`
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    padding: 5px;
`

const StyledSearch = styled.div`
    width: 220px;
    align-items: center;
    padding: 14px 28px;
    display: flex;
    align-items: center;
    &:focus-within{
        border: 1px solid #F5F5F7;
        border-radius: 10px;
    }
`
const SearchIconStyled = styled(SearchIcon)`
    margin-right: auto;
`
const StyledButton = styled.button`
    border: none;
    background: none;
`