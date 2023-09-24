
import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
    background: url(https://images.unsplash.com/photo-1527607682817-a74bfba38581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) center/60% repeat-x #000;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #7d0541;
    line-height: 1;
    fontWeight: 900;

`;

const SubHeading = styled(Typography)`
    font-size: 40px;
    color: #fff;
    line-height: 1;
    width: 60%;
    font-style: italic;


`


const Banner = () => {
    return (
        <Image>
            <Heading>theCritic!</Heading>
            <SubHeading>" Welcome to theCritic, where every movie has a story to be told and a review to be heard! Join us on a cinematic journey like no other as we explore the world of film, one critique at a time. "</SubHeading>

        </Image>
    )
}

export default Banner;