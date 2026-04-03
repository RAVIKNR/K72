
const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <img src={props.img} alt="" />
      <h1>{props.user} , AGE = {props.age}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur minima non officia impedit. Modi, voluptas doloremque porro sequi voluptatem quisquam animi laboriosam provident. Reprehenderit, culpa praesentium. Praesentium quas molestiae eligendi!</p>
      <button>
        Read More
      </button>
    </div>
  )
}

export default Card
