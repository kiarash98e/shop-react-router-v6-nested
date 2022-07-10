/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useShop } from '../../context/uiContext'

const details:React.FC = () => {

    const { id }= useParams()
    const { data } = useShop()
    const detailsData = data.filter((item:any) => item._id === id)

    const [index,setIndex] = React.useState(0)

    return (
        <div className="h-full w-full px-2 lg:px-16">
            {
                detailsData && detailsData.map((item:any) => {
                    return(
                        <div className='w-full h-full flex flex-col lg:flex-row' key={item._id}>
                            <div className=" grid-cols-full lg:grid-cols-5">
                                
                                <img src={item.images[index]} className="lg:max-w-lg hover:cursor-zoom-in hover:scale-125 w-full h-full rounded-md" alt={item.title} />
                            </div>
                            <div className="grid-cols-full lg:grid-cols-7">
                                <div className="w-full h-full flex px-4 flex-col py-4">
                                    <h3 className="text-lg text-heading font-bold">{item.title}</h3>
                                    <p className="text-base text-gray-800 font-body pt-4">{item.description}</p>
                                    <div className='w-full h-16 flex px-2 pt-5'>
                                        {
                                            item.images.map((item:any,i:any) => (
                                                <img src={item} alt="" onClick={() => {
                                                    let num = i 
                                                    setIndex(num)
                                                }} className="w-16 h-16 rounded-md px-2"/>
                                            ))
                                        }
                                    </div>
                                    
                                    <span className="text-xl text-gray-800 font-body pt-8">${item.price}</span>
                                </div>
                             </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default details