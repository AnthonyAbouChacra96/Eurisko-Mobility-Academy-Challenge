import React,{Component} from "react";
import Classes from "./Modal.module.css";
import Aux from "../../../HOC/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from 'prop-types';
import { propTypes } from "react-bootstrap/esm/Image";
 class Modal extends Component{
	shouldComponentUpdate(nextProps,nextState){
	return(nextProps.show!==this.props.show||nextProps.children!== this.props.children);
	}
	componentWillUpdate(){
		console.log ('componentWillUpdate');
	}
	 render(){
		 return (
       <Aux>
         <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
         <div
           className={Classes.Modal}
           style={{
          
						transform: `translateX(-50%) ${this.props.show ? 'translateY(-50%)' : 'translateY(-100vh)'}`, 
						opacity: this.props.show ? "1" : "0",
           }}
         >
           {this.props.children}
         </div>
       </Aux>
     );
	 }

}
Modal.propTypes={
show:PropTypes.bool
};
 export default Modal;