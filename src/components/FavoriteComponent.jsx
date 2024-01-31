import { useSelector } from "react-redux";
import { FavoriteCard } from "./FavoriteCard";
import { EmptyComponent } from "./EmptyComponent";

export function FavoriteComponent(){
    const favState = useSelector((state) => state.fav)

    return (
        <div className="favorite_comp">
            <h1>favorite</h1>
            <div className="favorite_list">
                {favState.fav.length == 0 ? (
                    <EmptyComponent text='favorite'></EmptyComponent>
                ) : (
                    favState.fav.map((item) => {
                        return <FavoriteCard key={item.id} productInfo={item}></FavoriteCard>
                    })
                )
            }          
            </div>
        </div>
    )
}