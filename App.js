import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './components/Header'
export default function App() {
  const apiurl = "http://api.themoviedb.org/3/discover/movie?api_key=59f0bcf1898b36006f068c2e060b0064"
  const [movies, setMovies] = useState([])
 
  useEffect(() =>{
    getMovies(apiurl)

    
  },[])

  const getMovies = (url) =>{
    const list = []
    fetch(url).then(res => res.json()).then(data => {
      const res = data.results
      res.forEach(e => {
        let obj = {
          id: e.id,
          title: e.original_title
        }
        list.push(obj)

      });
      console.log(list);
      setMovies(list)
    })
  }
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}> Movie Database !</Text>
       <ScrollView style={styles.results}> 
         {movies.map(movie => (
            <View  key={movie.id} style={styles.result}>
                <Text style={styles.heading}>{movie.title}</Text>
            </View>
         ))}
       </ScrollView>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:60
  },
  title:{
    color:'#fff',
    fontWeight:'700',
    fontSize: 25,
    textAlign:'center'
  },
  results:{
    flex:1,
    paddingTop:20
  },
  result:{
    flex:1,
    width:'100',
    marginBottom:20
  },
  heading:{
    color:'#fff',
    fontSize:18,
    fontWeight:'700',
    padding:20,
    backgroundColor:'#445565'
  }

});
