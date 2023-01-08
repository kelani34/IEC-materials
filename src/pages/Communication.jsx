import React, {useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { BagsCircle, BillboardCircle, MoreButton, ShirtsCircles, ShoesCircle, StationariesCircle } from '../assets/icons/Icons'
import ProfileImg from '../assets/User.png'
import ShowMore from 'react-show-more-button';

function Communication() {
  const Card = [
    {
      name:'BillBoards',
      icon: <BillboardCircle />
    },
    {
      name:'Stationaries',
      icon: <StationariesCircle />
    },
    {
      name:'Costomised Shirts and cap',
      icon: <ShirtsCircles />
    },
    {
      name:'Girls wears and shoes',
      icon: <ShoesCircle />
    },
    {
      name:'Costomised Bags',
      icon: <BagsCircle />
    }
    
  ]
  let userData = [
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
    {
      img: <StyledImg src={ProfileImg} />,
      name: 'M. Khalil',
      materials: 1200,
      beneficiaries: 3425,
      LGA: 'Kastina'
    },
  ]

  return (
    <>
    <StyledCard>
      {
        Card.map((item) => {
          return (
            <Box>
              <StyledText>{item.name}</StyledText>
              {item.icon}
            </Box>
          )
        })
      }
    </StyledCard>
    <StyledBelow>
      <StyledText out>Distribution Details</StyledText>
      <StyledTable>
        <StyledtableHeader>
        <StyledText out>Supervisor</StyledText>
        <StyledText out style={{marginLeft:'70px'}}>LGA</StyledText>
        <StyledText out>No. of Materials</StyledText>
        <StyledText out>No. of Beneficiaries</StyledText>
        <StyledText out></StyledText>
        </StyledtableHeader>
        <StyleShowMore 
          styleButton={{background:'none', color: '#00A006', border:'none'}}
          maxHeight={500}
        >
        {
          userData.map((item) => {
            return (
              <StyledElements>
            <div
              style={{display:'flex', alignItems:'center'}}
            >
              {item.img}
              <span style={{marginLeft:'10px'}}>{item.name}</span>
            </div>
            <div>
              <span>{item.LGA}</span>
            </div>
            <div>
              <span>{item.materials}</span>
            </div>
            <div>
              <span>{item.beneficiaries}</span>
            </div>
            <div
              style={{margin:'20px'}}
            >
              <MoreIcon />
            </div>
          </StyledElements>
            )
          })
          
        }
        </StyleShowMore>
      </StyledTable>
    </StyledBelow>
    </>
  )
}

export default Communication

const StyledCard = styled.div`
  display: flex;
`
const Box = styled.div`
  width: 161px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: rgba(130, 130, 130, 0.1);
  border-radius: 8.33333px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  margin: 20px 33px;
  text-align: center;
  align-items: center;
`
const StyledText = styled.h2`
  color: #858585;
  font-size: 14px;
  max-width: ${props => props.out ? 'auto' : '112px'};
`
const StyledBelow = styled.div`
  margin: 20px 33px;
`
const StyledTable = styled.div`
  border: 2px solid #F0F0F0;
  border-radius: 10px;
  /* min-height: 100%; */
  padding: 30px;
`
const StyledElements = styled.div`
  border: 1px solid #F0F0F0;
  border-radius: 50px;
  padding: 7px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#858585;
  margin-bottom: 15px;
`
const MoreIcon = styled(MoreButton)`
  margin-right: 30px;
`
const StyledtableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 44px;
`
const StyleShowMore = styled(ShowMore)`
  background:none;
`
const StyledImg = styled.img`
  border-radius: 200px;
`