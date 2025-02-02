import { useState } from "react"
import { Mic } from "lucide-react"
import { useNavigate } from 'react-router-dom'; 
import "./ReviewForm.css"

const ReviewForm = ({ onClose }) => {
  const [title, setTitle] = useState("")
  const [review, setReview] = useState("")
  const [submitted, setSubmitted] = useState(false) // Track submission state

  const handleSubmit = () => {
    // Simulate submission logic (e.g., API call)
    console.log("Submitted:", { title, review })
    setSubmitted(true) // Show the success message

    // Hide the popup and reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setTitle("")
      setReview("")
    }, 1500) // 3 seconds
  }

  const navigate = useNavigate(); 

  const handleCloseClick = () => {
    navigate('/map'); 
  };

  return (
    <div className="app-container">
      <div className="review-container">
        <header className="review-header">
          <h2>Post a Review</h2>
        </header>

        {submitted && (
          // Success message when submitted
          <div className="success-popup">
            <p>Posted!</p>
          </div>
        )}

        <div className="review-content">
          <div className="title-section">
            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="title-input"
            />
            <button className="icon-button">
              <Mic size={20} />
            </button>
          </div>

          <textarea
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="review-textarea"
          ></textarea>
        </div>

        <div className="review-actions">
          <button className="close-btn" onClick={handleCloseClick}>Close</button>
          {!submitted && (
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReviewForm
