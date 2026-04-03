import { Bookmark } from 'lucide-react'
import Card from './components/card'

const App = () => {

  const jobs = [
    {
      companyName: "Google",
      datePosted: "2 days ago",
      logo: "https://static.vecteezy.com/system/resources/previews/013/760/951/original/colourful-google-logo-in-dark-background-free-vector.jpg",
      tag1: "Full Time",
      tag2: "Senior Developer",
      post: "Frontend Engineer",
      payPerHour: "$70/hr",
      location: "Bangalore, India"
    },
    {
      companyName: "Amazon",
      datePosted: "5 days ago",
      logo: "https://tse4.mm.bing.net/th/id/OIP.lByJjCGQRKtObjHZhVuWGgHaFj?w=640&h=480&rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Full Time",
      tag2: "Junior Developer",
      post: "Backend Developer",
      payPerHour: "$45/hr",
      location: "Hyderabad, India"
    },
    {
      companyName: "Meta",
      datePosted: "1 day ago",
      logo: "https://th.bing.com/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Full Time",
      tag2: "Senior Developer",
      post: "Full Stack Engineer",
      payPerHour: "$80/hr",
      location: "Mumbai, India"
    },
    {
      companyName: "Apple",
      datePosted: "3 days ago",
      logo: "https://tse4.mm.bing.net/th/id/OIP.FIsJMIIB_ucx8Kz3O1C5AgHaEo?w=8400&h=5250&rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Part Time",
      tag2: "Senior Developer",
      post: "iOS Developer",
      payPerHour: "$75/hr",
      location: "Delhi, India"
    },
    {
      companyName: "Netflix",
      datePosted: "4 days ago",
      logo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Full Time",
      tag2: "Senior Developer",
      post: "UI/UX Designer",
      payPerHour: "$85/hr",
      location: "Pune, India"
    },
    {
      companyName: "Google",
      datePosted: "6 days ago",
      logo: "https://static.vecteezy.com/system/resources/previews/013/760/951/original/colourful-google-logo-in-dark-background-free-vector.jpg",
      tag1: "Part Time",
      tag2: "Junior Developer",
      post: "UI Developer",
      payPerHour: "$35/hr",
      location: "Chennai, India"
    },
    {
      companyName: "Amazon",
      datePosted: "7 days ago",
      logo: "https://tse4.mm.bing.net/th/id/OIP.lByJjCGQRKtObjHZhVuWGgHaFj?w=640&h=480&rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Full Time",
      tag2: "Senior Developer",
      post: "DevOps Engineer",
      payPerHour: "$65/hr",
      location: "Noida, India"
    },
    {
      companyName: "Meta",
      datePosted: "2 days ago",
      logo: "https://th.bing.com/th/id/OIP.lQ9JvL9Rxhx_s-VKQNEidgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Part Time",
      tag2: "Junior Developer",
      post: "React Developer",
      payPerHour: "$40/hr",
      location: "Kolkata, India"
    },
    {
      companyName: "Apple",
      datePosted: "1 week ago",
      logo: "https://tse4.mm.bing.net/th/id/OIP.FIsJMIIB_ucx8Kz3O1C5AgHaEo?w=8400&h=5250&rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Full Time",
      tag2: "Senior Developer",
      post: "Software Engineer",
      payPerHour: "$90/hr",
      location: "Gurgaon, India"
    },
    {
      companyName: "Netflix",
      datePosted: "3 days ago",
      logo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      tag1: "Full Time",
      tag2: "Senior Developer",
      post: "Cloud Engineer",
      payPerHour: "$95/hr",
      location: "Bangalore, India"
    }
  ];


  return (
    <div className="parent">

      {jobs.map(function (elem) {
        return <Card company={elem.companyName} datePosted={elem.datePosted} logo={elem.logo} tag1={elem.tag1} tag2={elem.tag2} post={elem.post} payPerHour={elem.payPerHour} location={elem.location} />
      })}

    </div>
  )
}

export default App
