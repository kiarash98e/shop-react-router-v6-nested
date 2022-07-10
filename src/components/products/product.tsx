import React from 'react'
import { Link } from 'react-router-dom'
import { useShop } from '../../context/uiContext'

const Products:React.FC = () => {
    const { data } = useShop()
    console.log(data)
    return (
        <div className='w-full h-full px-2 lg:px-16 py-3 grid grid-cols-full  lg:grid-col-4 xl:grid-cols-3'>
            {
                data && data.map((item:any) => {
                    return(
                        <div key={item._id} className="h-auto px-3">
                            <div className="h-full w-full flex flex-col py-4">
                                <Link to={"/products/" + item._id}>
                                    <img src={item.images[0]} className="h-full w-full" alt={item.title} />
                                </Link>
                                <h3 className='text-heading text-base lg:text-lg font-body py-3'>
                                    <Link to={`/product/${item._id}`}>{item.title}</Link>
                                </h3>
                                <p className="text-sm lg:text-base text-gray-800">{item.description}</p>
                                <h5 className="text-slate-600 text-xs lg:text-xl">${item.price}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
