
import './App.css'
import Book from './Book'

function App() {

  return (
    <>
    {/* props er exmple  */}
      <div>
        <h1>আমার বইয়ের দোকান</h1>
        {/* Book কম্পোনেন্টকে বিভিন্ন props দিয়ে ব্যবহার করা হচ্ছে */}
        <Book
          title="ফেলুদা সমগ্র"
          author="সত্যজিৎ রায়"
          price={550}
        />
        <Book
          title="দেয়াল"
          author="হুমায়ূন আহমেদ"
          price={300}
        />
      </div>
    {/* props er exmple end  */}



    
    </>
  )
}

export default App
