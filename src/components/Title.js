
import styled from "styled-components";

export default function Title() {
return (
    <TitleContainer>
        <TitleLists>
            <TitleItem>FRONT-END DEV.</TitleItem>
            <TitleItem>Im Hyun Jung</TitleItem>
            <MenuBox>
            <Button>ABOUT</Button>
            <Button>PROJECTS</Button>
            <Button>CONTACT</Button>
        </MenuBox>
        </TitleLists>
        
    </TitleContainer>
)
}

const TitleContainer =styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
top: 500px;
font-size: 100px;
padding-top: 100px;
color: white;

`
const TitleLists =styled.ul`
`
const TitleItem =styled.li``

const MenuBox=styled.div`
display: flex;
justify-content: space-between;
margin-top: 150px;

`

const Button=styled.button`
width: 200px;
height: 60px;
font-size: 25px;
border: 1px solid white;
border-radius: 10px;
cursor: pointer;
background: black;
color: white;


`