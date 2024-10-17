import { View, Text, FlatList } from "react-native";
import { styles } from "./home.style";
import { doutores } from "../../constants/data";
import Doutores from "../../components/doutores/doutores";
import icon from "../../constants/Icon";

export default function Home(props){

    return <View style= {styles.container}>
        <Text style= {styles.text}>Agende o seu serviço</Text>

            <FlatList data={doutores} 
                keyExtractor={(doc) => doc.id_doctor} 
                showsVerticalScrollIndicator= {false}
                renderItem={({item}) => {
                    return <Doutores nome= {item.nome}
                        icon= {item.icon == "M" ? icon.male : icon.female}
                        especialidade= {item.especialidade}/>
                }}/>

           

        </View>
}