import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./services.style";
import { servicos } from "../../constants/data";
import icon from "../../constants/Icon";
import Service from "../../components/service/service";

export default function Services(props){

    return <View style= {styles.container}>

        <View style= {styles.banner}>
            
            <Image source={icon.female}/>
            <Text style= {styles.nome}>Mayara</Text>
            <Text style= {styles.especialidade}>Esteticista</Text>

        </View>

            <FlatList data={servicos} 
                keyExtractor={(serv) => serv.id_sevico} 
                showsVerticalScrollIndicator= {false}
                renderItem={({item}) => {
                    return <Service descricao ={item.descricao}
                                    preco = {item.preco}/>
                }}/>

           

    </View>
}