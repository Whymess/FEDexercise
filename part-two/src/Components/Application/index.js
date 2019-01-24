import React, { Component } from "react";
import {
  CardAuthor,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Spinner
} from "../../Components/";

export default class Application extends Component {
  state = {
    apiTwoResult: [],
    apiOneResult: [],
    loading: false
  };

  componentDidMount = () => {
    Promise.all([
      fetch(
        `http://mtrest.advance.net/mtrest/articles/?blog_id=3674&limit=10&offset=0`
      ),
      fetch(`https://swapi.co/api/people/`)
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([apiOneResult, apiTwoResult]) => {
        this.setState({
          apiOneResult,
          apiTwoResult,
          loading: true
        });
      })
      .catch(error => {
        alert("There has been an error");
      });
  };

  parseApiResultsOne = () => {
    let { result } = this.state.apiOneResult;

    return (
      result &&
      result.map((el, i) => {
        let { title, short_title, summary, author } = el;
        let { display_name, profile_url } = author;
        if (i < 5) {
          return (
            <div key={i} className="card mt-3">
              <div className="card-body">
                <CardTitle title={title} />
                <CardSubtitle short_title={short_title} />
                <CardAuthor author={display_name} />
                <CardText summary={summary} />
                <CardLink link={profile_url} />
              </div>
            </div>
          );
        } else {
          return "";
        }
      })
    );
  };

  parseApiResultsTwo = () => {
    let { results } = this.state.apiTwoResult;
    return (
      results &&
      results.map((el, i) => {
        let { name, url, films, homeworld, skin_color } = el;
        if (i < 5) {
          return (
            <div key={i} className="card mt-3">
              <div className="card-body">
                <CardTitle name={name} />
                <CardSubtitle films={films.length} />
                <CardAuthor url={url} />
                <CardText homeworld={homeworld} />
                <CardLink skin_color={skin_color} />
              </div>
            </div>
          );
        } else {
          return "";
        }
      })
    );
  };

  render() {
    let { loading } = this.state;
    if (!loading) {
      return <Spinner />;
    } else {
      return (
        <div className="container">
          <div className="row mt-3">
            <div className="col"> {this.parseApiResultsTwo()}</div>
            <div className="col">{this.parseApiResultsOne()}</div>
          </div>
        </div>
      );
    }
  }
}
