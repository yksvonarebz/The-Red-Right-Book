import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { activeTab } from "../../redux/action-creators"
import { IStoreState } from "../../types"
import { Tab } from "./Tab/Tab"
import { TabContent } from "./TabContent"

const arrayTabs = [
  {
    id: 'decs',
    text: 'Description',
  },
  {
    id: 'author',
    text: 'Authors',
  },
]

const ActiveTab = () => {
  const tab = useSelector((state: IStoreState) => state.ui.activeTab);
  const bookInfo = useSelector((state: IStoreState) => state.books.selectedBook);

  const getAuthorsNameForUrl = (name: any) => name?.split(' ').join('-');
  
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const handleClick = (id: string) => {
    setActive(!active)
    dispatch(activeTab(id))
  }
  return (
    <>
    <ul className='container-activeTabs'>
      {arrayTabs.map(el => 
        <Tab key={el.id} id={el.id} text={el.text} isActive={el.id === tab} onClick={() => handleClick(el.id)}/>
      )}
    </ul>
    <TabContent content={!active ? bookInfo?.desc : 
      <Link to={`/authors/${getAuthorsNameForUrl(bookInfo?.authors)}`}>{bookInfo?.authors}</Link>}
    />
    </>
  )
}

export { ActiveTab }

