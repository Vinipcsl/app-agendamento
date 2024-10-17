import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "../../constants/Icon";
import { styles } from "./login.styles";
import Button from "../../components/button/button";

export default function Login(){


    return <View style= {styles.container}>
        <View style = {styles.containerLogo}>
            <Image source= {Icon.Golden2} style={styles.logo}/>
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input}/>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
            </View>
            <Button text="Acessar"/>
        </View>

        <View style={styles.footer}>
            <Text >Não tenho conta. </Text>
            <TouchableOpacity >
                <Text style={styles.footerLink} >Criar conta agora!</Text>
            </TouchableOpacity>
        </View>
       
    </View>
}