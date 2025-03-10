import React from "react";
import {StyleSheet, View, Button, Pressable} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

type Props = {
    isTimerRunning:boolean;
    stopTimer: () => void;
    startTimer: () => void;
}

export const TimerToggleButton: React.FC<Props> = ({
    isTimerRunning, 
    stopTimer, 
    startTimer
}) => {
    return (
        <Pressable onPress={isTimerRunning ? stopTimer : startTimer}>
            <View style = {styles.container}>
                <FontAwesome 
                    name = {isTimerRunning ? 'pause' :'play'} 
                    size={125} 
                    // color="red"
                    style={styles.icon}
                />
            </View>
        </Pressable>
        // <Button title ={isTimerRunning ? 'Stop Timer' : 'Start Timer'} 
        // onPress={isTimerRunning ? stopTimer : startTimer} 
        // />
    );
};

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        color: "#fff"

    }, 
    container: {
        borderWidth:5,
        width: 250, 
        height: 250, 
        borderRadius: 250/2,
        justifyContent: "center",
        borderColor: '#fff', 
        marginVertical: 50
    }
})
