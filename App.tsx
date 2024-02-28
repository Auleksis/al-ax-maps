/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef } from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

import html_script from './html_script';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from "react-native-bootsplash";


function App(): JSX.Element {

  const webviewRef= useRef(null);

  useEffect(() => {
    console.log(webviewRef);
    if(webviewRef.current){
      webviewRef.current.injectJavaScript(`
        map.setView([59.93, 30.19], 10);
      `);
    }
  }, [])
//



  //LOGIC FUNCTIONS
  function onMessage(data){
    console.log(data.nativeEvent.data);

    const line = JSON.parse(data.nativeEvent.data);

    if(line[0] == 'clicked_point'){
      setRedMarker(line[1], line[2]);
    }
  }

  function setRedMarker(lat: number, lng: number){
    if(webviewRef.current){
      webviewRef.current.injectJavaScript(
        `
        var greenIcon = L.divIcon({
          html: '<svg id="Layer_1" enable-background="new 0 0 510 510" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1876_"><g id="XMLID_1921_"><path id="XMLID_1934_" d="m240 0v465c0 8.272-6.729 15-15 15-8.272 0-15-6.728-15-15 0-5.246 0-9.754 0-15-10.492 0-19.508 0-30 0v15c0 24.814 20.185 45 45 45 11.15 0 21.752-4.103 30-11.495l10-249.253-10-249.252c-5.246 0-9.754 0-15 0z" fill="#ffd930"/><path id="XMLID_1931_" d="m270 465c0-13.115 0-451.884 0-465-5.246 0-9.754 0-15 0v498.505c9.525-8.538 15-20.636 15-33.505z" fill="#ffb242"/></g><path id="XMLID_1918_" d="m74.688 104.688c-48.164 48.163-74.688 112.199-74.688 180.312v15h135l120-270c-68.113 0-132.148 26.524-180.312 74.688z" fill="#d50f55"/><path id="XMLID_1911_" d="m255 30 120 270h135c0-5.246 0-9.754 0-15 0-142.088-115.199-255-255-255z" fill="#c5145b"/><path id="XMLID_1890_" d="m135 270v30h120l15-120-15-150c-66.274 0-120 107.452-120 240z" fill="#fc445f"/><path id="XMLID_1878_" d="m351.497 127.311c-21.86-59.039-56.944-97.311-96.497-97.311v270h120v-15c-.545-7.353 4.304-82.596-23.503-157.689z" fill="#d50f55"/></g></svg>',
          iconSize: [30, 30],
          
          className: ""
        });

          L.marker([${lat}, ${lng}], {icon: greenIcon}).addTo(map)
          .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
      `
      );
    }
  }



  //UI FUNCTIONS
  const addRedMarker = () => {
    if(webviewRef.current){
      console.log("Added");
      webviewRef.current.injectJavaScript(`

      var greenIcon = L.divIcon({
        html: '<svg id="Layer_1" enable-background="new 0 0 510 510" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1876_"><g id="XMLID_1921_"><path id="XMLID_1934_" d="m240 0v465c0 8.272-6.729 15-15 15-8.272 0-15-6.728-15-15 0-5.246 0-9.754 0-15-10.492 0-19.508 0-30 0v15c0 24.814 20.185 45 45 45 11.15 0 21.752-4.103 30-11.495l10-249.253-10-249.252c-5.246 0-9.754 0-15 0z" fill="#ffd930"/><path id="XMLID_1931_" d="m270 465c0-13.115 0-451.884 0-465-5.246 0-9.754 0-15 0v498.505c9.525-8.538 15-20.636 15-33.505z" fill="#ffb242"/></g><path id="XMLID_1918_" d="m74.688 104.688c-48.164 48.163-74.688 112.199-74.688 180.312v15h135l120-270c-68.113 0-132.148 26.524-180.312 74.688z" fill="#d50f55"/><path id="XMLID_1911_" d="m255 30 120 270h135c0-5.246 0-9.754 0-15 0-142.088-115.199-255-255-255z" fill="#c5145b"/><path id="XMLID_1890_" d="m135 270v30h120l15-120-15-150c-66.274 0-120 107.452-120 240z" fill="#fc445f"/><path id="XMLID_1878_" d="m351.497 127.311c-21.86-59.039-56.944-97.311-96.497-97.311v270h120v-15c-.545-7.353 4.304-82.596-23.503-157.689z" fill="#d50f55"/></g></svg>',
        iconSize: [30, 30],
        
        className: ""
      });

        L.marker([61.95875457776836, 30.398475748355732], {icon: greenIcon}).addTo(map)
        .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
      `);

      
    }
  } 

  const addBlueMarker = () => {
    if(webviewRef.current){
      console.log("Added");
      webviewRef.current.injectJavaScript(`

      var greenIcon = L.divIcon({
        html: '<!-- icon666.com - MILLIONS vector ICONS FREE --><svg id="Layer_1" enable-background="new 0 0 510 510" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1876_"><g id="XMLID_1921_"><path id="XMLID_1934_" d="m240 0v465c0 8.272-6.729 15-15 15-8.272 0-15-6.728-15-15 0-5.246 0-9.754 0-15-10.492 0-19.508 0-30 0v15c0 24.814 20.185 45 45 45 11.15 0 21.752-4.103 30-11.495l10-249.253-10-249.252c-5.246 0-9.754 0-15 0z" fill="#ffd930"></path><path id="XMLID_1931_" d="m270 465c0-13.115 0-451.884 0-465-5.246 0-9.754 0-15 0v498.505c9.525-8.538 15-20.636 15-33.505z" fill="#ffb242"></path></g><path id="XMLID_1918_" d="m74.688 104.688c-48.164 48.163-74.688 112.199-74.688 180.312v15h135l120-270c-68.113 0-132.148 26.524-180.312 74.688z" fill="#d50f55" style="fill: rgb(38, 15, 215);"></path><path id="XMLID_1911_" d="m255 30 120 270h135c0-5.246 0-9.754 0-15 0-142.088-115.199-255-255-255z" fill="#c5145b" style="fill: rgb(50, 20, 200);"></path><path id="XMLID_1890_" d="m135 270v30h120l15-120-15-150c-66.274 0-120 107.452-120 240z" fill="#fc445f" style="fill: rgb(81, 69, 252);"></path><path id="XMLID_1878_" d="m351.497 127.311c-21.86-59.039-56.944-97.311-96.497-97.311v270h120v-15c-.545-7.353 4.304-82.596-23.503-157.689z" fill="#d50f55" style="fill: rgb(38, 15, 215);"></path></g></svg>',
        iconSize: [30, 30],
        
        className: ""
      });

        L.marker([61.95875457776836, 30.418475748355732], {icon: greenIcon}).addTo(map)
        .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
      `);

      
    }
  } 


  return (
    <>

    <NavigationContainer
      onReady={() => {BootSplash.hide()}}>


      <View style={styles.mapView}>
        <WebView
          style={styles.mapView}
          originWhitelist={['*']}
          ref={webviewRef}
          source={{ html: html_script}}
          onMessage={onMessage}
        />


        <View style={styles.bottomView}>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.addRedMarker} onPress={addRedMarker}>
              <Text>Алёна</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBlueMarker} onPress={addBlueMarker}>
              <Text>Александр</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  bottomView:{
    flex: 1,
    backgroundColor: 'gray',
  },

  buttonView:{
    flexDirection: 'row',
  },

  mainView:{
    flex: 1,
  },

  mapView:{
    flex: 1,
  },

  addRedMarker:{
    padding: 20,
    backgroundColor: 'red',
    margin: 10,
  },

  addBlueMarker:{
    padding: 20,
    backgroundColor: 'blue',
    margin: 10,
  }
});

export default App;
