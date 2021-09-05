import React from 'react'
import {Box, Button, Grid, Paper, Typography} from '@material-ui/core'
import {dynamicList} from '../Style/style'
import {useState} from 'react'


const CreateBox=(props)=>
{
    const classes=dynamicList();
    return(
        <Box className={classes.boxContainer}>
            <Paper className={classes.headPaper}>
                <Typography variant='h5' align='left' className={classes.DataText}>Heading</Typography>
            </Paper>
            <Paper className={classes.dataPaper}>
                <Typography variant='h6' align='left' className={classes.DataText}>{props.data}</Typography>
            </Paper>
        </Box>
    )
}

function Dynamic_List() {

    const [leftDatas, setLeftData] = useState(['asad','asads','karthi'])
    const [rightDatas, setRightData] = useState(['asdd','adad'])
    const classes=dynamicList();


    return (
        <div>
            <Grid container justifyContent='center' className={classes.mainContainer}>
               
                <Grid item md={5}>
                    <h1>Group1</h1>
                </Grid>
                    <Grid item md={5}>
                    <h1>Group1</h1>
                    </Grid>
                    </Grid>     
            <Grid container justifyContent='center'  className={classes.mainContainer} spacing={5}>
                <Grid item md={5}>
                    {
                        leftDatas.map(leftdata=>
                          <CreateBox data={leftdata}/>
                            )
                    }
                    <Button variant="contained" className={classes.Button} color="primary">Add</Button>
                </Grid>

                <Grid item md={5}>
                    {
                        rightDatas.map(rightData=>
                          <CreateBox data={rightData}/>
                            )
                    }
                    <Button variant="contained" className={classes.Button}>Add</Button>
                </Grid>
            </Grid>

            
        </div>
    )
}

export default Dynamic_List
