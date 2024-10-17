import { View,Text, Image } from "react-native";
import { styles } from "./agendamento.style";
import Icon from "../../constants/Icon";
import Button from "../button/button";

export default function Agendamento(props){
    return <View style={styles.agendamento}>

        <Text style={styles.nome}>{props.servico} - {props.doutor}</Text>
        <Text style={styles.especialidade}>{props.especialidade}</Text>

        <View style={styles.container}>
        
            <View style={styles.containerAgenda}>
                <View style={styles.agenda}>
                    <Image source={Icon.calendar} style={styles.icon}/>
                    <Text style={styles.data}>15-10-2024</Text>
                </View>

                <View style={styles.agenda}>
                    <Image source={Icon.clock} style={styles.icon}/>
                    <Text style={styles.hora}>08:00</Text>
                </View>


            </View>

            <View style={styles.containerBotao}>
            <Button text= "Cancelar Reserva" theme = "btnVermelho"/>

            </View>

        </View>
    </View>
}