import { View, Text } from "react-native";
import {styles} from "./profile.style";

export default function Profile() {
    return <View style={styles.container}>  

                <View style={styles.item}>
                    <Text style={styles.nome}>Nome</Text>
                    <Text style={styles.texto}>Vinicius Pereira Costa e Silva</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.nome}>E-mail</Text>
                    <Text style={styles.texto}>vini@teste.com</Text>
                </View>
          
          </View>
}