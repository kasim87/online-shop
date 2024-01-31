import { useGetProductsByCategoriesQuery, useGetProductsQuery } from "../store/api";
import { ErrorComponent } from "./ErrorComponent";
import { LoadingComponent } from "./LoadingComponent";
import { ProductsListComponent } from "./ProductsListComponent";
import { SortAsideComponent } from "./SortAsideComponent";
import { SortTopComponent } from "./SortTopComponent";


export function MainContentComponent(props){
    const {data, isLoading, error} = 
        props.them == 'popular' ?
                     useGetProductsQuery() : 
                    useGetProductsByCategoriesQuery(props.them)
        
    return isLoading ? (<LoadingComponent></LoadingComponent>) : error ? (<ErrorComponent></ErrorComponent>) :
        (
        <div className="main_cont">
            <h1>{props.them.toUpperCase()}</h1>
            <div className="main_cont_grid">
                <SortTopComponent content={data}></SortTopComponent>
                <SortAsideComponent content={data}> </SortAsideComponent>
                <ProductsListComponent content={data}></ProductsListComponent>
            </div>
        </div>
        )
}