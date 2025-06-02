import { useState } from "react"
import avatar1 from "../assets/avatars/Avatar (1).png"
import avatar2 from "../assets/avatars/Avatar (2).png"
import avatar3 from "../assets/avatars/Avatar (3).png"
import Button from "../component/Button"

const Review = () => {
  const reviews = [
    { userImage: avatar1, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar2, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar3, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar1, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar2, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar3, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar1, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar1, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar2, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
    { userImage: avatar3, userName: "Nanni", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet odio sint aut exercitationem maxime illo debitis fugit fuga autem?" },
  ]
  const [viewAll, setViewAll] = useState(false)
  return (
    <div className="review-container" id="Reviews">
      <div className="review-wrapper">
        <div className="header">Our clients are always satisfied</div>
        <div className={`reviews-wrapper ${viewAll ? "view" : ""}`}>
          {reviews.map((review, index) => (
            <div className="review">
              <div className="review-header">
                <img src={review.userImage} alt="" />
                <div className="userName">{review.userName}</div>
              </div>
              <div className="review-message">{review.message}</div>
            </div>
          ))}
        </div>
        <Button label="View all Reviews" event={() => setViewAll(!viewAll)} />
      </div>
    </div>
  )
}

export default Review