import { Colors, Font_Syze } from "../../constants/theme";

export const styles = {

    container:{
        
        backgroundColor: Colors.white,
        flex: 1,
    },

    banner:{
      backgroundColor: Colors.blue,
      justfyContent: "center",
      alignItems:"center",
      paddingTop: 10,
      paddingBottom: 25  
    },

    nome:{
        fontSize: Font_Syze.md,
        color: Colors.gold,
        fontWeight: "bold",
        marginTop: 5,
    },

    especialidade:{
        fontSize: Font_Syze.sm,
        color: Colors.gold,
        marginTop: 3,
    },

}