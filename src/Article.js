import React from 'react'
import { Card} from 'react-bootstrap'


export default function Article({article}) {
  return (
    <Card className="card">
      <Card.Body className="cardBody">
      <div className="d-flex justify-content-between">
      <img className="d-none d-md-block" width="50%" alt="" src={article.urlToImage}/>
        <div>
          <Card.Title className="title">
            {article.title} 
  {/* <span className="text-muted font-weight-light"> By {article.author}</span> */}
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
            {new Date(article.publishedAt).toLocaleString()}
            </Card.Subtitle>
            <div className="description" style={{wordBreak:'break-all',textOverflow: "ellipsis"}}>
              { article.description }
            </div>
          </div>
        
      </div>
        </Card.Body>
      </Card>
  )
}
