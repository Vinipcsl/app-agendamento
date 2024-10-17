import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "../../constants/Icon";
import { styles } from "./account.style";
import Button from "../../components/button/button";

export default function Login(){


    return <View style= {styles.container}>
        <View style = {styles.containerLogo}>
            <Image source= {Icon.Golden2} style={styles.logo}/>
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Nome" style={styles.input}/>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input}/>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>
            </View>
            <Button text="Criar Conta"/>
        </View>

        <View style={styles.footer}>
            <Text >Já tenho conta. </Text>
            <TouchableOpacity >
                <Text style={styles.footerLink} >Fazer login!</Text>
            </TouchableOpacity>
        </View>
       
    </View>
}