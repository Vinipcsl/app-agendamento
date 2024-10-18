import { Colors, Font_Syze } from "../../constants/theme";

export const styles = {

    container:{
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 10,
    },

    theme:{
        todayTextColor: Colors.gold,
        selectedDayTextColor: Colors.gold,
        selectedDayBackgroundColor: Colors.blue,
        arrowColor: Colors.blue
    },

    horario:{
        fontSize: Font_Syze.lg,
        fontWeight: "bold",
        color: Colors.black,
        marginTop: 20,

    }

   

}