import React from "react";

class PokeList extends React.Component {
    render() {
        const { name, type, averageWeight, image} = this.props.pokemon
        return(
        <div className="pokemon">
            <div className="about">
                 { name }
                 <br />
                 { type } 
                 <br />
                Average Weight: { averageWeight.value }{ averageWeight.measurementUnit}
            </div>
            <div>
            <img src={image} alt={this.props.alternativeText} />
            </div>
        </div>)
    }
}

export default PokeList;