import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Modal, IconButton, Title } from 'react-native-paper'
import YoutubePlayer from "react-native-youtube-iframe";
import { getMovieTrailers } from '../api/movies'
import { WebView } from 'react-native-webview'

const ModalVideos = (props) => {
    const {show, setShow, idMovie} = props
    const [movieTrailers, setMovieTrailers] = useState()

    useEffect(() => {
      getMovieTrailers(idMovie).then((response) => {
        let idVideo = ""
        response.results.find((video) => {
            console.log("video",video)
            if(video.site === 'YouTube' && !idVideo){
              console.log("First video")
              idVideo = video.key
            }
        });
        setMovieTrailers(idVideo)
      });
    }, []);

    if(!movieTrailers) return null

    return (
          <Modal visible={show} 
            contentContainerStyle={styles.modalView}>
            {
                Platform.OS === 'ios' ? (
                    <YoutubePlayer videoId={movieTrailers} style={styles.youtube}/>        
                ) : (
                    <WebView 
                      style={{width:500}} 
                      source={{uri: `https://youtube.com/embed/${movieTrailers}?controls=0&showinfo=0`}}></WebView>
                )
            }    
            <IconButton
              icon="close"
              style={styles.buttonClose}
              onPress={() => setShow(false)}>
            </IconButton>
          </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: '#000',
        height: '120%',
        alignItems: 'center'
    },
    buttonClose: {
        backgroundColor: '#1eadf2',
        width: 50,
        height: 50,
        borderRadius: 100,
        position: 'absolute',
        bottom: 100
    },
    youtube:{
        height: 300,
        alignSelf: "stretch"
    }
})

export default ModalVideos
