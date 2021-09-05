import { makeStyles } from "@material-ui/core"
const dynamicList=makeStyles((theme)=>({
    mainContainer:{
        marginTop:'30px',
        overflow:'hidden'
    },
    boxContainer:{
        height:'200px',
        marginBottom:'10px'
    },
    headPaper:{
        height:'30%',
        backgroundColor:'#37474F',
        color:'#FAFAFA',
    },
    dataPaper:{
        height:'70%',
        backgroundColor:'#546E7A',
        color:'#FAFAFA',
    },
    Button:{
        position:'fixed',
        bottom:0
    },
    DataText:{
        padding:'2%',
    }
    
}))



export {dynamicList}