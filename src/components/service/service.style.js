import { Colors, Font_Syze } from "../../constants/theme";

export const styles = {

    service:{
        flexDirection:"row",
        backgroundColor: Colors.white,
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: Colors.gray,
    },

    containerTexto:{
    flex: 1,
    },

    containerBotao:{
    marginTop: 5
    },

    descricao:{
        fontSize: Font_Syze.md,
        color: Colors.black,
        fontWeight: "bold",
        marginTop: 5,
    },

    preco:{
        fontSize: Font_Syze.md,
        color: Colors.blue,
        marginTop: 3,
    },

}