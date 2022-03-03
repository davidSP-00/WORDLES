
import { Platform, SafeAreaView, StyleSheet, StatusBar, Animated, View} from 'react-native';

import { Screen5Letters } from './src/pages/Screen5Letters';
import { NavBar } from './src/components/navbar/NavBar';
import FlashMessage from 'react-native-flash-message';
import { useState } from 'react';
import { useRef } from 'react';
import { SideBar } from './src/components/sidebar/SideBar';
import { TodayScore } from './src/pages/TodayScore';
import { Collection } from './src/pages/Collection';
import { WordContext } from './src/components/context/WordContext';


export default function App() {
  
  const [currentTab, setCurrentTab] = useState("WORDLE");
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const [wordWin, setWordWin] = useState("$$$$$")

 
 
  return (
    <SafeAreaView style={styles.container}>
      <FlashMessage position="top" />
      <SideBar currentTab={currentTab} setCurrentTab={setCurrentTab}></SideBar>
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 6,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: showMenu ? 5 : 0,
        transform: [
          { translateX: offsetValue }
        ]
      }}>


        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }],
          alignItems: 'center'
        }}>
          <NavBar setShowMenu={setShowMenu}  showMenu={showMenu}
            offsetValue={offsetValue} closeButtonOffset={closeButtonOffset}></NavBar>
            
        <WordContext.Provider value={{wordWin,setWordWin}}>
          <View style={[currentTab=="WORDLE" ? {} : { display: 'none' },{marginTop:'8%'} ]}>
            <Screen5Letters></Screen5Letters>
            </View>
            <View style={currentTab=='Estadísticas' ? {} : { display: 'none' } }>
          <TodayScore></TodayScore>
           </View>
           
           <View style={currentTab=='Mi Colección' ? {} : { display: 'none' } }>
          <Collection></Collection>
           </View>
           </WordContext.Provider>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});

