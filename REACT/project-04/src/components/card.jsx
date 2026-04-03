import {Bookmark} from 'lucide-react'
const card = (props) => {
  return (
    <div className="card">
            <div className="top">
              <div className="circle">
                <img src={props.logo} alt={props.companyName} />
                </div>
                <button>Save<Bookmark className='logo'/> </button>
            </div>
            <div className='centre'>
                <h3>{props.company} <span>{props.datePosted}</span></h3>
                <h2>{props.post}</h2>

                <div>
                  <h4>{props.tag1}</h4>
                  <h4>{props.tag2}</h4>
                </div>
                </div>

                <div className="bottom">
                  <div>
                    <h3>{props.payPerHour}</h3>
                    <p>{props.location}</p>
                  </div>
                  <button>Apply now</button>
                </div>

        </div>
  )
}

export default card
