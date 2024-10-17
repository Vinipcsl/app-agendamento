import { setStatusBarBackgroundColor } from "expo-status-bar";
import { Colors, Font_Syze } from "../../constants/theme";

export const styles = {

    agendamento:{
        
        backgroundColor: Colors.white,
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: Colors.gray
    },

    nome:{
        fontSize: Font_Syze.md,
        color: Colors.black,
        marginBottom: 2,
    },

    especialidade:{
        fontSize: Font_Syze.sm,
        color: Colors.blue,
        marginBottom: 4,
    },

    icon:{
        width: 25,
        height: 25,
        marginRigth: 5,
    },

    data:{
        fontSize: Font_Syze.sm,
        color: Colors.black,
        marginTop: 3,
    },

    hora:{
        fontSize: Font_Syze.sm,
        color: Colors.blue,
        marginTop: 3,
    },
    
    agenda:{
        flexDirection: "row",

    },

    containerAgenda:{
        flex: 1,

    },

    containerBotao:{
        marginTop: 5
    },

    container:{
        flexDirection: "row",
    }

}