import {Button,Typography} from "@mui/material"
import {styled} from "@mui/material/styles"

const Intro=()=>{
    const MyCustomButton=styled(Button)(({theme})=>({
        padding:5,
        margin:theme.spacing(2)
      }))
    
      return (
        // <div className="App" style={{color:"red"}}>
        <div className="App" style={{color:"red"}}>
          <Typography variant="h3">This is MUI v5</Typography>
          <Typography variant="myVariant">This is MUI v5</Typography>
          <Typography sx={{color:"myCustomColor"}}>I hope you find value :) Hit the like button</Typography>
          <Typography sx={{color:"myCustomColor.superDark"}}>I hope you find value :) Hit the like button</Typography>
          <Typography sx={{color:"myCustomColor.superLight"}}>I hope you find value :) Hit the like button</Typography>
          <Button 
            variant="contained"
            sx={{p:2,m:2}}
          >Hello From MUI v5</Button>
          <Button 
            variant="contained"
            color="secondary"
          >Hello From MUI v5</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="contained" color="gray[300]">
            Error
          </Button>
          <MyCustomButton variant="contained">
            MyCustomButton
          </MyCustomButton>
        </div>
      )
}

export default Intro