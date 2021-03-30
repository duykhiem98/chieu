import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Image, TextInput,ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import {ICON_DROPDOWN} from '../image/index';
 
const DATA = [
  {
    id: '1',
    title: "Nguyên tắc làm việc",
    Name:'General Code of Conducts'
  },
  {
    id: '2',
    title: "Thời gian & môi trường làm việc",
    Name:'Workplace policies, Working times and conditions'    
  },
  {
    id: '3',
    title: "Sử dung, bảo vệ & quản lí tài sản",
    Name:'Các quy định về bảo về, sử dụng có tráchnhiệm, và đảm bảo an toàn tài sản của công ty' 
  },
  {
   id: '4',
   title: "Nguyên tắc chính trực",
   Name:'Liên quan đến: Sự chính trực về tài chính,báo cáo, đánh giá và ra quyết định'  
 },
 {
   id: '5',
   title: "Quản lí phát triên nhân sự",
   Name:'Các nguyên tắc về quản trị và phát triển nhân sự'  
 },
 {
   id: '6',
   title: "Giao tiếp và truyền tải thông tin",
   Name:'Communication Policy ~ internally, socially and in the public'  
 },
 {
   id: '7',
   title: "Giao tiếp và truyền tải thông tin",
   Name:'Communication Policy ~ internally, socially and in the public'  
 },
];
const Name = styled.Text`
   font-size: 17px;
   color: #111;
   font-weight: bold
`;
const Description = styled.Text`
   font-size: 15px;
   color: #333;
`;
const Item = ({ item, style }) => {
   const [isShowInfo, setIsShowInfo] = useState(false);
   const onPress = () => {
      setIsShowInfo(isShowInfo ? false : true)
   }
   return (
      <>
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Name>{item.title}</Name>
            <Image source={ICON_DROPDOWN} style={{left:'98%',alignItems:'center',transform: [{ rotate: isShowInfo ? '180deg':'0deg' }]}} />
            <Description>{item.Name}</Description>
      </TouchableOpacity>
      {
         isShowInfo 
         ? <Name>ok men</Name>
         : null
      }
      </>
  )
};

const App = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };

  return (
     <>
      <View style={styles.up}>
         <View style={styles.BT}>
           <TouchableOpacity>
              <Image resizeMode={'contain'} source={require('../image/Vector16.png')} style={{width:25,height:25,}} />
           </TouchableOpacity>

            </View>
            <View style={styles.TL}>
               <Text style={{fontSize:20,fontWeight:'bold'}}> Work rules</Text>
            </View>
            <View style={{width:80}}></View>
      </View>

     <View style={styles.container}>
      
      <View style={styles.bot}>     
         <SafeAreaView style={styles.Fcontainer}>
            <FlatList
               data={DATA}
               renderItem={renderItem}
               keyExtractor={(item) => item.id}
               />
         </SafeAreaView>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'white'
   },
   up:{
     backgroundColor:'white',
      width:'100%',
      height: 76,
      flexDirection:'row',
      borderBottomWidth: 1,
      borderBottomColor: '#DEDEDE'
   },
   bot:{
      flex:1,
   },
  Fcontainer: {
    marginTop: 0
  },
  item: {
    flexDirection:'column',
    marginHorizontal: 20,
    borderBottomWidth:0.7,
    paddingVertical: 16,
    borderBottomColor: '#CECECE'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111'
  },
  BT:{
     width:80,
     padding:20

  },
  TL:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
  },
});

export default App;