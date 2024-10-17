import { View, Text, FlatList } from "react-native";
import { styles } from "./calendario.style";
import { agendamentos } from "../../constants/data";
import icon from "../../constants/Icon";
import Agendamento from "../../components/agendamentos/agendamento";

export default function Calendario(props){

    return <View style= {styles.container}>

            <FlatList data={agendamentos} 
                keyExtractor={(agendamento) => agendamento.id_agendamento} 
                showsVerticalScrollIndicator= {false}
                renderItem={({item}) => {
                    return <Agendamento servico={item.servico}
                        doutor={item.doutor}
                        especialidade={item.especialidade} />
                }} />

           

        </View>
}