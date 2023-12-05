import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import '../../assets/styles/basket.scss'
import { loadBook, loadBooksInBasket, removeBook } from "../../redux/action-creators"
import { IStoreState } from "../../types"
import { Header } from "../Header"
import { ElementBasket } from "./ElementBasket"

const Basket = () => {
  const books = useSelector((state: IStoreState) => state.books.basketLoaded)
  const booksId = useSelector((state: IStoreState) => state.books.basket)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadBook(booksId))
  }, [booksId])

  return (
    <>
      <Header/>
      <div className="container-basket">
        { books && books.length === 0 
        ? 
        <div style={{color: 'white'}}>Looks like your basket is empty right now</div> 
        :
        Array.isArray(books) && books?.map((el: any) => 
          <ElementBasket key={el.isbn13} books={el}/> 
        )}
        { books && books.length !> 1 
        ?
        <button onClick={() => {return dispatch(loadBooksInBasket(null)), dispatch(removeBook(null))}}>
          Clear the Basket
        </button>
        : 
        ''
        }
      </div>
    </>
  )
}

export { Basket }

