import { bool, func, node, string } from 'prop-types';
import React from "react";


class Button extends React.Component {
    render() {
        const { className, children, disabled, onClick } = this.props;

        return(
            <button
            onClick={ onClick }
            className={ className }
            disabled={ disabled }
            type="button">
                { children }
            </button>
        );
    }
}

Button.propTypes = {
    className: string.isRequired,
    children: node.isRequired,
    disabled: bool,
    onClick: func.isRequired,
  };
  
  Button.defaultProps = {
    disabled: false,
  };

 export default Button;