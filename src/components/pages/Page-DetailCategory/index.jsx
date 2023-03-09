import React from 'react'
import './styles.scss'
import store from '../../../reduxStore/store'
import { connect } from 'react-redux'
import {NavigationSecond} from '../../intro/navigation-bar'
import DetailContent from './DetailsContent'



class DetailCategory extends React.Component {
    componentDidMount(){
       
        console.log("MMount ", store.getState())
        
        // const description = store.getState().detailPage_Reducer[0].description
    }
    render(){
    
        return (
            <div>
                <NavigationSecond/>
                 {/* <div className = "detail-category-body">
                     <h1>Detail Cateogry of {store.getState().detailPage_Reducer[0].changeCategory}</h1>
               </div> */}
               <DetailContent title = {store.getState().detailPage_Reducer[0].changeCategory} 
               image = {store.getState().detailPage_Reducer[0].image}/>

            </div>
      
        )

    }
}
export default DetailCategory
