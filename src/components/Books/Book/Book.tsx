import { Link } from 'react-router-dom';
import '../../../assets/styles/books.scss';


const Book = (book: any) => {
  const { bookInfo } = book;
  const { title, price, image, isbn13} = bookInfo;
  return (
    <Link to={`/books/${isbn13}`} className='link-book'>
      <div className='book-container'>
        <div className="flex-block">
          <img src={image} alt="book" className="book-img"/>
          <h3 className='book-title'>{title}</h3>
          <h3 className='book-price'>{price === '$0.00' ? 'Free eBook' : price}</h3>
        </div>
      </div>
    </Link>
  )
}

export { Book };

