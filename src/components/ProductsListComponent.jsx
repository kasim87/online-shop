import { useSelector } from 'react-redux'
import { ProductCartComponent } from './ProductCartComponent'

export function ProductsListComponent({content}){
    const sortState = useSelector((state) => state.sort)

    return (
        <div className='products_list'>
            {sortState.sortContent.length == 0 ? content.map((product) => {
                return <ProductCartComponent key={product.id} product={product}></ProductCartComponent>
            }) : sortState.sortContent.map((product) => {
                return <ProductCartComponent key={product.id} product={product}></ProductCartComponent>
            })}
        </div>
    )
}