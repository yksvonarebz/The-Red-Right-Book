import { useDispatch } from "react-redux";

const ElementBasket = ({books}: any) => {
  const id = books?.isbn13;
  const dispatch = useDispatch();
  return (
    <div className='container-book'>
      <div className='block-w-image'>
        <img src={books?.image} alt="" className="image" />
      </div>
      <div className="block-w-info">
        <h3 className="block-w-info__title">{books?.title}</h3>
        <h5 className="block-w-info__authors">by: {books?.authors}</h5>
        <h5 className="block-w-info__published">Publisher: {books?.publisher}</h5>
        <h5 className="block-w-info__price">price: {books?.price}</h5>
      </div>
    </div>
  )
}

export { ElementBasket };

