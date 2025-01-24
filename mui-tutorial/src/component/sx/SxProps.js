import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

const SxProps=()=>{
    const test=true
    return(
        <Stack spacing={2} direction="row">
            <Button 
                variant="contained"
                sx={[
                        {
                            width:"200px",
                            m:4,
                            border:5,
                            borderColor:"secondary.main",
                            "&.MuiButton-root":{
                                height:"100px"
                        }},
                        test&&{
                            border:10
                        }
                    ]}
            >Button 1</Button>
            <Button 
                variant="contained"
                sx={{width:{
                    xs:100,
                    sm:200,
                    md:300,
                    lg:400,
                    xl:500
                },
                m:4}}
            >Button 101</Button>
            <Button variant="contained">Button 2</Button>
        </Stack>
    )
}
export default SxProps