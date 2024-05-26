import React,{useEffect,useState} from 'react';
import { View, Text,FlatList } from 'react-native';
import NewsCard from '../components/newsCard';

export default function NewScreen() {
  const [news , setNews] = useState([])


  useEffect(() => {
    async function fetchData() {
   
      // const json = await fetch('http://10.0.2.2:5000/api/stocks/get_stock/', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(postData)
      // })
      // const data1 = await json.json();
      // console.log("triggered stocks")
      // await console.log("data1",data1)
      // setData(data1)
      const json2 = await fetch(`https://newsapi.org/v2/everything?q=BTC&apiKey=b632a301e6764941b057d0724633b3ff&pageSize=10&page=1,2`)
      const newsData = await json2.json()
      setNews(newsData)
    
    
    }
    fetchData();
  }, []);

  return (
    <View className=" my-5  pl-2 pr-2 pb-10">
          <Text className="mx-5 text-xl text-dark text-center font-extrabold" >Recent News</Text>
          <View className="mt-5">
         
            <FlatList
        data={news.articles}
        renderItem={({item}) => <NewsCard news = {item} />}

       
      />


          </View>
        </View>
  );
}
