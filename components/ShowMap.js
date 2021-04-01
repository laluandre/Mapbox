import React, { Component } from "react";
import { PermissionsAndroid, StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiYW5kcmV3aW5hcnRhIiwiYSI6ImNrbXh1OHE4NzBzaHcyd205ejlvN20xaTkifQ.v_KsMPuUap_aVqGBOMLJbg");

const IS_ANDROID=Platform.OS==='android';

export default class App extends Component {
    async UNSAFE_componentWillMount(){
        if(IS_ANDROID){
            const isGranted = await MapboxGL.requestAndroidLocationPermissions();
            this.setState({
                isAndroidPermissionGranted : isGranted,
                isFetchinAndroidPermission : false,
            });
        }
    }

    constructor(props){
        super(props);
        this.state = {
            isAndroidPermissionGranted: false,
            isFetchinAndroidPermission: IS_ANDROID,
            coordinates: [[-0.789275, 113.921327]],
            showUserLocation: true,
            location: [[-0.789275, 113.921327]],
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <MapboxGL.MapView 
                    style = {styles.map}
                    showUserLocation = {true}
                    zoomLevel = {16}
                    styleURL={MapboxGL.StyleURL.Street}
                    centerCoordinate={[-0.789275, 113.921327]}>
                <MapboxGL.UserLocation></MapboxGL.UserLocation>
                </MapboxGL.MapView>

                <MapboxGL.PointAnnotation
                    id='1'
                    title='nooooooooooooooooooooo'
                    coordinate={[-123.1118716, 49.2847560]}>
                </MapboxGL.PointAnnotation>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
});