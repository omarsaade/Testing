import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: '1', name: 'Item 1'},
        {id: '2', name: 'Item 2'},
        {id: '3', name: 'Item 3'},
        {id: '4', name: 'Item 4'},
        {id: '5', name: 'Item 5'},
        {id: '6', name: 'Item 6'},
        {id: '7', name: 'Item 7'},
        {id: '8', name: 'Item 8'},
        {id: '9', name: 'Item 9'},
      ],
      selectedId: null,
      refreshing: false,
    };
  }
  componentDidMount = async () => {
    console.log('zzz');
  };

  handleSelectItem = id => {
    const updatedData = this.state.data.map(item =>
      item.id === id ? {...item, name: 'sam'} : item,
    );
    this.setState({data: updatedData});
  };

  handleRefresh = () => {
    console.log('smsms');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          // numColumns={2}
          // mesh mheme hasayta.........
          // initialNumToRender={5}
          // he bet2elak men wen tebda el flatlist.........
          // initialScrollIndex={3}
          // he btebalesh el 3ared bel 3akes.........
          // inverted={true}
          // extraData hye mishen ta3mul render iza tgayar shi bel state.....
          extraData={this.state}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // for row => width
          ItemSeparatorComponent={
            <View style={{width: 1, backgroundColor: 'red'}} />
          }
          // for column
          // ItemSeparatorComponent={
          //   <View style={{height: 6, backgroundColor: 'red'}} />
          // }
          //   he bten3ered bi e5er el list taba3 el data
          ListFooterComponent={() => (
            <View
              style={{
                backgroundColor: 'green',
              }}>
              <Text>This is the end of the list</Text>
            </View>
          )}
          renderItem={({item, index}) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
          // iza el this.state.data fadye....bten3ered he
          ListEmptyComponent={() => (
            <View>
              <Text>No items to display</Text>
            </View>
          )}
          //  mheme
          ListFooterComponentStyle={{backgroundColor: '#0a86a1'}}
          //   he bten3ered bi awal el list taba3 el data
          ListHeaderComponent={() => (
            <View
              style={{
                backgroundColor: 'purple',
              }}>
              <Text>hiiiiiiiiii</Text>
            </View>
          )}
          ListHeaderComponentStyle={{backgroundColor: 'yellow'}}
          // meshe hala...........
          // ListHeaderComponentStyle ,Optional custom style for multi-item rows generated when numColumns > 1
          // columnWrapperStyle={{
          //   justifyContent: 'space-between',
          //   backgroundColor: 'red',
          //   paddingHorizontal: 10,
          // }}
          // hon mishn lama ta3mul refresh......
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          /* he 5suse lal horizontal , ma bt5alli el item ykerr fared karra , hye lal scrollView ma3mule
          In React Native, pagingEnabled is a property of the ScrollView component that determines whether scrolling should stop on multiples of the scroll view's size. This property is particularly useful for creating horizontal pagination, where you want the scroll view to snap to specific points or pages.

          When you set pagingEnabled to true, it means that as the user scrolls through the ScrollView, it will stop at predetermined intervals based on the size of the ScrollView. This behavior simulates paging, where the content aligns neatly with the boundaries of the ScrollView, making it easier for users to navigate through distinct sections or pages.
          */

          pagingEnabled={true}
          /////////////
          ///////

          viewabilityConfig={
            {
              // itemVisiblePercentThreshold: 250,
            }
          }
          // windowSize={15}
          // bounces={true}
          /*
          


          Now the function
          

          
          
          */
        />
        {/* <Button
          title="Select Item 2"
          onPress={() => this.handleSelectItem('2')} // Selecting item 2
        /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 200,
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'grey',
  },
  item: {
    backgroundColor: '#31429a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // width: 250,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  footerComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'lightgrey',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
