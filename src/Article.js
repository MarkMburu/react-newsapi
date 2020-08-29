import React from 'react'
import { Card} from 'react-bootstrap'

export default function Article({article}) {
  return (
    <Card>
      <Card.Body>
      <div className="d-flex justify-content-between">
        <div>
          <Card.Title>
            {article.title} 
  <span className="text-muted font-weight-light"> By {article.author}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
            {new Date(article.publishedAt).toLocaleString()}
            </Card.Subtitle>
            <div style={{wordBreak:'break-all'}}>
              {article.description}
            </div>
          </div>
          <img className="d-none d-md-block" height="40%" width="40%" src={article.urlToImage}/>
      </div>
        </Card.Body>
      </Card>
  )
}
