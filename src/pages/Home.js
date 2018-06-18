import React, { Component } from 'react'
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export class Home extends Component{
    state = { usedSearch: false, results : [] }

    _handleResults = (results) => {
      this.setState ({ results, usedSearch:true })
    }
    _renderResults(){
      return this.state.results.length === 0 
        ? <p>Sorry!  Results not found!</p> 
        : <MoviesList movies={this.state.results} />
      
    }

    render(){
			return(
				<div>
					<Navbar />
					<Title>Search Movies</Title>
					<div className='searchForm-wrapper'>
						<SearchForm onResults = { this._handleResults }/>
					</div>
					<div className='container container_list-item'>
							{this.state.usedSearch
								? this._renderResults()
								: <small>Use the form to search a movie</small>
							}
					</div>
					<Footer />
				</div>
			) 
    }
}