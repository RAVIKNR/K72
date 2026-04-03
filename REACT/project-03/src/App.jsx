import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>

      <Card user='Malati Yadav' age={40} img='https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg'/>
      <Card user='Ravi Yadav' age={20} img='https://images.pexels.com/photos/34692590/pexels-photo-34692590.jpeg'/>
      <Card user='Kishan Yadav' age={18} img='https://images.pexels.com/photos/35570927/pexels-photo-35570927.jpeg'/>
    </div>
  )
}

export default App
