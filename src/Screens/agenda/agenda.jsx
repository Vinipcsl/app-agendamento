import { Text, View } from "react-native"
import { styles } from "./agenda.style"
import { Calendar, LocaleConfig } from "react-native-calendars"
import {ptBr} from "../../constants/calendar"
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button";

LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br"


export default function Agenda(){

    const [ selectedDate, setSelectedDate] = useState("");
    const [ selectedHouer, setSelectedHouer] = useState("");


    return <View style={styles.container}>
        <View>
            
            <Calendar theme= {styles.theme}
                onDayPress={(day) =>{
                    setSelectedDate(day.dateString)
                }}

                markedDates={{
                    [selectedDate]: {selected: true}
                }}

                minDate={new Date().toDateString()}
            />

            <View>
                <Text style={styles.horario}>Horário</Text>
            </View>


            <View>
                <Picker selectedValue={selectedHouer}
                onValueChange={(itemValue, itemIndex)=>{
                    setSelectedHouer(itemValue)
                }}>
                    <Picker.Item label="09:00" value="09:00"/>
                    <Picker.Item label="09:30" value="09:30"/>
                    <Picker.Item label="10:00" value="10:00"/>
                </Picker>
            </View>

        </View>


        <View>
            <Button text= "Confirmar Serviço"/>
        </View>

    </View>
}