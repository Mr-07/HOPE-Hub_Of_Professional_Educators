import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import calculator from 'images/calculator.svg';
import Typography from '@mui/material/Typography';
import { getScoresInBandObj, subjects } from 'common/utilities.jsx';

export default function BandCalculator() {
    const [overallBand, setOverallBand] = useState(0);
    const [bandObj, setBandObj] = useState(getScoresInBandObj());

    const calculateBand = (value, formulaNumber) => {
        const ref = parseFloat((value / formulaNumber).toString()).toFixed(2);
        return (((ref * 100) % 100) >= 75 ? Math.ceil(ref) : Math.floor(ref));
    };

    const onSliderChange = (event, newValue) => {
        bandObj[event.target.name] = calculateBand(newValue, 4.4);
        setBandObj((prevState) => {
            return {...prevState, ...bandObj};
        });

        let sumOfAllBands = 0; 
        subjects.forEach(element => {
            sumOfAllBands += bandObj[element];
        });
        
        setOverallBand(calculateBand(sumOfAllBands, subjects.length));
    }

    return (
        <>
            <Grid container >
                <Grid item md={5} xs={12} pt={{ xs: 7 }} display={'flex'} justifyContent={'center'}>
                    <img src={calculator} height={'70%'} />
                </Grid>
                <Grid item md={7} xs={12} pt={{ md: 10 }} pb={{md: 0, xs: 10}} display={{xs: 'flex', md: 'block'}} justifyContent={'center'}>
                    <Paper elevation={7} sx={{width: "70%", minWidth:'300px'}}>
                        <Grid container sx={{ borderRadius: 'inherit' }}>
                            <Grid item xs={4} sx={{ borderRadius: 'inherit', backgroundColor: '#F2F2F2' }}>
                                <Typography align={'center'} fontWeight={'bold'} variant={'h6'} sx={{borderRadius: 'inherit', backgroundColor: '#E6E6E6'}}>Subjects</Typography>
                                <Box pt={4} pb={4}>
                                    {
                                        subjects.map((ele, i) => {
                                            return <Typography key={i} pt={1} pb={1} pl={"30%"} display={'flex'} justifyContent={'flex-start'} >{ele}</Typography>
                                        })
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={6} sx={{ backgroundColor: '#FFFFFF' }}>
                                <Typography align={'center'} fontWeight={'bold'} variant={'h6'} sx={{backgroundColor: '#E6E6E6'}}>Marks</Typography>
                                <Box pt={4} pb={4}>
                                    {
                                        subjects.map((ele, i) => {
                                            return  <Box key={i} pt={{ xl: 1.4, xs: 0.1 }} display={'flex'} justifyContent={'center'}>
                                                        <Slider 
                                                            min={0}
                                                            max={40}
                                                            name={ele}
                                                            size="small"
                                                            defaultValue={0}
                                                            aria-label="Default"
                                                            valueLabelDisplay="auto"
                                                            onChange={onSliderChange} 
                                                            sx={{color: '#6C63FF', width: '70%'}}
                                                        />
                                                    </Box>
                                        })
                                    }
                                </Box>
                                <Typography align={'center'} fontWeight={'bold'} sx={{backgroundColor: '#E6E6E6'}}>Overall</Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ borderRadius: 'inherit', backgroundColor: '#F2F2F2' }}>
                                <Typography align={'center'} fontWeight={'bold'} variant={'h6'} sx={{borderRadius: 'inherit', backgroundColor: '#E6E6E6'}}>Band</Typography>
                                <Box pt={4} pb={4}>
                                    {
                                        subjects.map((ele, i) => {
                                            return  <Box key={i} p={{xl: 0.9, xs: 1.1}} display={'flex'} justifyContent={'center'}>
                                                        <div className='dot'>{bandObj[`${ele}`]}</div>
                                                    </Box>
                                        })
                                    }
                                </Box>
                                <Typography align={'center'} fontWeight={'bold'} sx={{borderRadius: 'inherit', backgroundColor: '#E6E6E6'}}>{overallBand}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
