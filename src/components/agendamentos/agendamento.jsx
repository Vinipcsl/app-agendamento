import { View,Text, Image } from "react-native";
import { styles } from "./agendamento.style";
import Icon from "../../constants/Icon";

export default function Agendamento(props){
    return <View style={styles.agendamento}>

        <Text style={styles.nome}>{props.servico} - {props.doutor}</Text>
        <Text style={styles.especialidade}>{props.especialidade}</Text>

        <View style={styles.container}>
        
            <View style={styles.containerAgenda}>
                <View style={styles.agenda}>
                    <Image source={Icon.calendar} />
                    <Text>15-10-2024</Text>
                </View>

                <View style={styles.agenda}>
                    <Image source={Icon.clock} />
                    <Text>08:00</Text>
                </View>


            </View>

            <View style={styles.containerAgenda}>
            

            </View>

        </View>
    </View>
}