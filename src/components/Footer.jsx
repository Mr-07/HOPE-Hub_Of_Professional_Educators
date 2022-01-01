import React from 'react'
import Box from '@mui/material/Box';
import gmail from 'images/gmail.svg';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import facebook from 'images/facebook.svg';
import instagram from 'images/instagram.svg';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <Grid container p={'2rem'} display={'flex'} height={'300px'} backgroundColor={'#192534'}>
            <Grid item xs={6} sm={9} height={'100%'}>
                <Box display={'flex'} p={'2rem 0'} flexDirection={{xs: 'column', sm: 'unset'}} borderBottom={'1px solid white'} height={'50%'}>
                    <Box display={'flex'} justifyContent={'flex-start'} width={{xs: '100%', sm: '40%'}}>
                        <Box width={'30%'} height={{xs: '100%', sm: '70%'}} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'4px'} backgroundColor={'#E6E6E6'}>
                            <Link className='footer-links' to={'/contact-us'}>Enroll</Link>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent={{xs: 'flex-start', sm: 'center'}} color={'#FFFFFF'} fontSize={'28.4px'} width={{xs: '100%', sm: '70%'}}>HOPE</Box>
                </Box>
                <Box xs={12} display={'flex'} justifyContent={'flex-end'} flexDirection={'column'} height={'50%'} pl={{sm: '37%'}} color={'#FFFFFF'} >
                    <Box display={'flex'} justifyContent={{xs: 'flex-start', sm: 'center'}} gap={'3%'} width={{xs: '36px', sm: '100%'}}>
                        <img src={instagram}/>
                        <img src={facebook}/>
                        <img src={gmail}/>
                    </Box>
                    <Box display={'flex'} justifyContent={{xs: 'flex-start', sm: 'center'}} fontSize={{xs: '10px', sm: '12px', md: '14px'}}>
                        {`© HOPE, Inc ${new Date().getFullYear()}. All rights reserved`}
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3} display={'flex'} alignItems={'center'}>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={{xs: '17%', lg: '10%'}} borderRadius={'80px 0px'} backgroundColor={'#E6E6E6'}>
                    <Typography fontSize={{xs: '10px', sm: '12px', md: '14px', lg: '16px'}}>Aman Sharma</Typography>
                    <Typography fontSize={{xs: '10px', sm: '12px', md: '14px', lg: '16px'}}>SCO-13 Second Floor Leela Bhawan</Typography>
                    <Typography fontSize={{xs: '10px', sm: '12px', md: '14px', lg: '16px'}}>Patiala, Punjab 147001</Typography>
                    <Typography fontSize={{xs: '10px', sm: '12px', md: '14px', lg: '16px'}}>+91 9888022552</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Footer;
