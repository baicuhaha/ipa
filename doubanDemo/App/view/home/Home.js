import react ,{PureComponent} from 'react';
import { createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Movie from '../movie/index'
import Music from '../music/index'


const  MovieVc = createStackNavigator({
    Movie:{
        screen:Movie,
        parh:"/",
        navigationOptions:() => ({
            title:"电影"
        })
    }
})

const  MusicVc = createStackNavigator({
    Music:{
        screen:Music,
        parh:"/",
        navigationOptions:() => ({
            title:"音乐"
        })
    }
})

const HomePage = createBottomTabNavigator({
    MovieVc:{
        screen:MovieVc,
        navigationOptions:{
            title:"电影",
            header:null
        }
    },
    MusicVc:{
        screen:MusicVc,
        navigationOptions:{
            title:"音乐",
            header:null
        }
    }
})

class Home extends PureComponent {
    static router = HomePage.router;
    render(){
        return (
            <HomePage
            navigation={this.props.navigation}/>
        )
    }
}
export default Home