import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./doutores.style.js";

export default function Doutores(props){
    return <TouchableOpacity style={styles.doctor}>
            <Image source={props.icon} style={styles.icon}/>
           
           <View >
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.especialidade}>{props.especialidade}</Text>
            </View>
    </TouchableOpacity>

}