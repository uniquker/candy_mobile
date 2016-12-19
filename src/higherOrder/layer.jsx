import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import '../../style/higherOrdder/layer.scss'
import Animate from 'rc-animate';

export default function(ComposedComponent){
    return class Layer{
        constructor(text,options){
            this._layer=document.createElement('div');
            this._layer.className='candy-mob-layer-set';
            document.body.appendChild(this._layer);

            this.options=Object.assign({},options);
            this.text=text;
            this.isShow=false;
            this.show();
        }
        animateEndHandler=()=>{
            if(!this.isShow){
                this.destroy();
            }
        }
        _render(){
            ReactDOM.render(
                <Animate transitionName="candy-mob-layer--animate" onEnd={this.animateEndHandler}>
                    {this.isShow?<ComposedComponent className="candy-mob-layer" remove={this.remove} {...this.options}>{this.text}</ComposedComponent>:null}
                </Animate>
            , this._layer);
        }
        set isShow(value){
            this._isShow=value;
            this._render();
        }
        get isShow(){
            return this._isShow;
        }
        show=()=>{
            if(!this.isShow){
                this.isShow=true;
            }
        }
        remove=()=>{
            if(this.isShow){
                this.isShow=false;
                this.options.removeCallback&&this.options.removeCallback();
            }
        }
        destroy=()=>{
            //ReactDOM.unmountComponentAtNode(this._layer);
            document.body.removeChild(this._layer);
        }
    }
}