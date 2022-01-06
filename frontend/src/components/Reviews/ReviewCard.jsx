import { Check, Close } from '@mui/icons-material';
import { Card, CardContent, Grid, Rating, Typography, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { Component } from 'react';

class ReviewCard extends Component {
    render() {
        return (
            <div>
                <br />
                <Card sx={{ maxWidth: 604 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} container sx={{ textAlign: 'center' }} direction="column">
                            <Grid item >
                                <Typography gutterBottom variant="h5" component="div">
                                    3.0
                                </Typography>
                            </Grid>
                            <Grid item>
                                {/* 3.0 */}
                                {/* <ButtonBase sx={{ width: 128, height: 128 }}> */}
                                <Rating name="read-only" value={2} readOnly size="small" />
                                {/* </ButtonBase> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={9} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Standard license
                                        <Typography variant="overline" color="text.secondary" component="div">
                                            Mac Miller
                                        </Typography>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Full resolution 1920x1080 • JPEG are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarcticaare a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <Check color="success" />
                                        <h5>Pros</h5>
                                    </div>                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Full resolution 1920x1080 • JPEG are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarcticaare a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <Close sx={{ color: red[500] }} />
                                        <h5>Cons</h5>
                                    </div>                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Full resolution 1920x1080 • JPEG are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarcticaare a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    <br />
                                    <Button variant="outlined">Feature this review?</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br />
                </Card>
                <br />
                <Card sx={{ maxWidth: 345 }}>
                    <Rating name="read-only" value={2} readOnly />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Review Title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        );
    }
}

export default ReviewCard;