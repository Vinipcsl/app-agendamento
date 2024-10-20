import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props){

function TesteClick(){
    Alert.alert("Clicou no botão")
}

return <TouchableOpacity onPress={TesteClick} 
style={[styles.btn, props.theme == "btnVermelho" ? styles.btnVermelho : styles.btnDourado]} > 

<Text style ={styles.text}>
    {props.text}
    </Text>

</TouchableOpacity>

}

export default Button;