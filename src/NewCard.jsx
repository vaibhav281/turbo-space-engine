import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Divider, Typography} from '@mui/material'



const NewCard = () => {
  const handleClick = () => {
    window.location.reload();  // recommended
    //window.location.href = window.location.href;  // not recommended
  };
  return (
    <div style={{ display:"flex", justifyContent:'center'}}>
        <Card sx={{maxWidth:"400px", height:"auto", marginTop:'10vh', overflow: 'hidden', borderRadius:'15px',border:"2px solid lightgray"}}>
            <CardActionArea sx={{ backgroundColor:"lightcoral"}}>
               <Button onClick={handleClick}>click me</Button>
            </CardActionArea>
            <CardContent sx={{padding:2,  borderRadius:"25px"}}>
            <Typography >New Card Content is here.
            </Typography>
            <div className='imageContainer'>
              <CardMedia
                className='imageAnime'
                component="img"
                alt="google.com icon "
                sx={{ maxWidth:"100%", display:"flex",justifyContent:"center",marginTop:2, borderRadius:"25px" }}
                image="https://rukminim2.flixcart.com/image/850/1000/j87njww0/poster/u/m/a/large-naruto-uzumaki-on-hi-quality-large-print-36x24-inches-original-imaet2muwfvcj2cy.jpeg?q=20 "
              />
              <CardMedia
                className='imageAnime hoverImage'
                component="img"
                alt="google.com icon "
                sx={{ maxWidth:"100%", display:"flex",justifyContent:"center",marginTop:2, borderRadius:"25px" }}
                image="https://i.pinimg.com/originals/41/3a/2e/413a2e853a2e0f2c4b77d05e7667ba9a.png"
              />
            </div>
            
            </CardContent>
            <Divider sx={{margiTop:2, marginBottom:1
            }}>Devider Content</Divider>
            
        </Card>
    </div>
  )
}

export default NewCard
