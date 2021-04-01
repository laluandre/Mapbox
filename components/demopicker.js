import React, { Component } from 'react';
import {View, SafeAreaView, StyleSheet, Platform} from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapBoxGL.setAccessToken(
    'pk.eyJ1IjoiYW5kcmV3aW5hcnRhIiwiYSI6ImNrbXh1OHE4NzBzaHcyd205ejlvN20xaTkifQ.v_KsMPuUap_aVqGBOMLJbg'
);


const IS_ANDROID=Platform.OS==='android';

export default class ShowMap extends Component {
    async UNSAFE_componentWillMount(){
        if(IS_ANDROID){
            const isGranted = await MapBoxGL.requestAndroidLocationPermissions();
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
            coordinates: [[-122.084990, 37.426929]],
            showUserLocation: true,
            location: [[-122.084990, 37.426929]],
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <MapBoxGL.MapView
                        ref = {c => (this._map = c)}
                        zoomLevel = {14}
                        centerCoordinate = {this.state.coordinates[0]}
                        showUserLocation = {true}
                        userTrackingMode = {this.state.userSelectedUserTrackingMode} >

                        <MapboxGL.Camera
                            zoomLevel = {16}
                            animationMode = {'flyTo'}
                            animationDuration = {0}
                            ref = {c => (this.camera = c)}
                            centerCoordinate = {this.state.location}>
                        </MapboxGL.Camera>
                        
                        <MapBoxGL.UserLocation>

                        </MapBoxGL.UserLocation>

                    </MapBoxGL.MapView>
                </View>
            </SafeAreaView>
        )
    }
}

function backup() {
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
});