import { Colors, Font_Syze } from "../../constants/theme";

export const styles = {

    doctor:{
        
        backgroundColor: Colors.white,
        flex: 1,
        padding: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: Colors.gray,
        marginTop: 3,
        marginBottom:3,
        borderRadius: 10,
    },

    nome:{
        fontSize: Font_Syze.md,
        color: Colors.blue,
        marginTop: 5,
    },
    especialidade:{
        fontSize: Font_Syze.sm,
        color: Colors.gold,
        
    },
    icon:{
        width: 50,
        heigth: 50,
        marginRight: 8,

        
    },

}