import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Basket, Confirmed, HomePage, SearchData, SelectedBook, SignIn, SignUp, SignUpActivate, SignUpConfirmation } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}>
          <Route index element={<HomePage />} />
          <Route path={'basket'} element={<Basket/>} />
          <Route path={'search'} >
            <Route path={':id'} element={<SearchData />} />
          </Route>
          <Route path={'books'}>
            <Route path={':id'} element={<SelectedBook/>}/>
            <Route path={'*'} element={<div>Ops, something went wrong</div>}/>
          </Route>
          <Route path={'signUp'} element={<SignUp/>}/>
          <Route path={'signIn'} element={<SignIn/>}/>
          <Route path={'signUpConfirmation'} element={<SignUpConfirmation/>}/>
          <Route path={'confirmed'} element={<Confirmed/>}/>
          <Route path={'activate/:uid/:token'} element={<SignUpActivate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
