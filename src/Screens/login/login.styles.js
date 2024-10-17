import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Colors, Font_Syze } from "../../constants/theme";

export const styles = {

    container:{
        
        backgroundColor: Colors.white,
        flex: 1,
        padding: 40,
        justifyContent: "space-between",
    },

    containerLogo:{
        alignItems: "center", 
    },

    logo: {
        whidth: 512,
        heigth: 285,    
        margin: 40, 
    },

    containerInput:{
        marginBottom: 15,
    },

    input:{
        backgroundColor: Colors.gray,
        fontSize: Font_Syze.md,
        padding: 5,
        borderRadius: 10,
        

    },

    footer:{
        alignItems: "center",
        flexDirection: "row", 
        justifyContent: "center",
    },

    footerLink:{
        color: Colors.gold,
    }
    


   

}