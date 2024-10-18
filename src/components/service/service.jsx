import { Text, View } from "react-native";
import Button from "../button/button";
import {styles} from "./service.style";

export default function Service (props) {

    return <View style={styles.service}>

        <View style={styles.containerTexto}>
            <Text style={styles.descricao}>{props.descricao}</Text>
            <Text style={styles.preco}>
                {
                    new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(props.preco)
                }

            </Text>
        </View>

        <View style={styles.containerBotao}>
            <Button text= "Agendar"/>
        </View>
    </View>
}