import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from './Scroll_to_top';
export class News extends Component {

    static defaultProps = {
        category: 'general',
        country: 'in',
    }
    static propTypes = {
        category: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    }
    constructor() {
        super()
        this.state = {
            news: [],
            page: 1,
            total_result: 0
        }
    }
    update = () => {
        let pagesize = 5;
        let url = `https://newsapi.org/v2/top-headlines?&lang=en&country=${this.props.country}&category=${this.props.cat}&apiKey=5fcc59f4d8af4fb3b86732cc0a1ba15c&pagesize=${pagesize}&page=${this.state.page}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    news: this.state.news.concat(data.articles),
                    total_result: data.totalResults,
                });
            })
    }
    fetchMoreData = () => {
        this.setState({ page: this.state.page + 1 }, () => {
            this.update();
        });
    }
    componentDidMount() {
        this.update();
    }

    render() {
        return (
            <div className="container my-3" id='top'>
                <h1 className='text-center my-4'>Newsman</h1>

                <InfiniteScroll
                    dataLength={this.state.news.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.news.length !== this.state.total_result}
                    loader={(this.state.news.length < this.state.total_result) && <div className='d-flex align-items-center justify-content-center my-2'>
                        {<Spinner />}
                    </div>}
                    endMessage={
                        this.state.total_result > 0 && (<div>
                            <p className='text-center'>Thank for using Newman</p>
                            <p className='text-center'>Have a nice day</p>
                        </div>
                        )
                    }
                >
                    <div className='container row'>
                        {this.state.news.map((arrayItem, index) => {
                            return <div className='col-md-4 my-3' key={`${arrayItem.url}-${index}`}>
                                <NewsItem
                                    title={arrayItem.title}
                                    description={arrayItem.description ? arrayItem.description : ""}
                                    imageUrl={arrayItem.urlToImage}
                                    url={arrayItem.url}
                                    source={arrayItem.source.name}
                                    author={arrayItem.author ? arrayItem.author : 'Unknown'}
                                    date={new Date(arrayItem.publishedAt).toGMTString()} />
                            </div>
                        }
                        )}
                    </div>
                </InfiniteScroll>
                <ScrollToTop />

            </div>
        )
    }
}

export default News