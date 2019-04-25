import React, { Component } from "react";
import Item from './Item';

export class Breadcrumb extends Component {
  state = {
    firstslugs: null,
    lastslug: null
  };

  componentDidMount() {
    console.log(window.location);
    const slug = window.location.pathname.split("/");
    slug.shift();
    const last_slug = slug.pop();
    this.setState(
      {
        firstslugs: slug,
        lastslug: last_slug
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {this.state.firstslugs ?
              this.state.firstslugs.map((slug,id) => {
            return (
              <li key={id} class="breadcrumb-item">
                <Item slug={slug} />
              </li>
            );
          })
            : null
          }
          <li class="breadcrumb-item active" aria-current="page">
            <Item slug={this.state.lastslug} />
          </li>
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;
