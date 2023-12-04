import React, { Component } from 'react'
import img from '../images/newsman.png'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props
        let badge = {position:'relative',top: '21.2px',zIndex:'1'}
        return (
            <div className='container d-flex flex-wrap flex-row-reverse'>
                <span className="badge bg-danger" style={badge}>{source}</span>
                <div className="card" >
                    <div className='d-flex justify-content-center'>
                    <img src={imageUrl?imageUrl:img} className="card-img-top" alt="..." style={{height: '200px'}} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author}Last updated {date}</small></p>
                        <div className='d-flex justify-content-center'>
                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem