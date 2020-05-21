import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: null
    }
  }

componentDidMount() {
  this.fetchMovie(this.props.match.params.id);
}

componentWillReceiveProps(newProps) {
  if (this.props.match.params.id )
}

}



//function route? ... 

//Class route ... component did mount -->  receive props -> fetchmovie --> save to added/saved list -->  handle delete?  