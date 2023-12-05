import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "../../Row";
import '../../assets/styles/books.scss';
import { loadBooks } from "../../redux/action-creators";
import { IStoreState } from "../../types";
import { BookRow } from "./BookRow";

const Books = () => {
  const books = useSelector((state: IStoreState) => state.books.books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks(books))
  },[])
  return (
    <section className="section-w-books">
      <div className="rolling-info-main">
              <div className="rolling-info-content">
                <div className="rolling-info-desc">
                  <p className="rolling-info-desc__rolling-text">
                    OUR BESTSELLERS:
                  </p>
                  <p className="rolling-info-desc__rolling-text">
                    "The Life and Suffering of Sir Andreas" by Andrey Zberanovsky,
                  </p>
                  <p className="rolling-info-desc__rolling-text">
                    "Dark Souls" by Grogu Nikolayev,
                  </p>
                  <p className="rolling-info-desc__rolling-text">
                    "The Beggar" by Machi Niccolòvelli.
                  </p>
                  <p className="rolling-info-desc__rolling-text">
                    OUR BESTSELLERS:
                  </p>
                  <p className="rolling-info-desc__rolling-text">
                    "The Life and Suffering of Sir Andreas" by Andrey Zberanovsky,
                  </p>
                  <p className="rolling-info-desc__rolling-text">
                    "Dark Souls" by Grogu Nikolayev,
                  </p>
                  <p className="rolling-info-desc__rolling-text">
                    "The Beggar" by Machi Niccolòvelli.
                  </p>
                </div>
              </div>
            </div>
      <h1 className="section-w-books__title">Latest additions to our Collection</h1>
      <hr/>
      {Row(books).map((el: any) => 
        <BookRow key={el.reduce((prev: string, cur: any) => prev+ '.' + cur.isbn13, '')} books={el}/>
      )}
    </section>
  );
}

export { Books };

