<<<<<<< HEAD
import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setnewItemLoading] = useState(false);
=======
import {useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";
import './charList.scss';


const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
<<<<<<< HEAD
        initial ? setnewItemLoading(false) : setnewItemLoading(true);
=======
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

<<<<<<< HEAD
    const onCharListLoaded = async(newCharList) => {
=======
    const onCharListLoaded = (newCharList) => {
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
<<<<<<< HEAD
        setCharList([...charList, ...newCharList]);
        setnewItemLoading(false);
        setOffset(offset + 9);
        setCharEnded(ended);
=======

        setCharList(charList => [...charList,...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

<<<<<<< HEAD
    function renderItems (arr){
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <CSSTransition key={item.id} timeout={500} classNames="char__item">
                    <li
                        className="char__item"
                        tabIndex={0}
                        ref={el => itemRefs.current[i] = el}
                        onClick={() => {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === ' ' || e.key === "Enter") {
                                props.onCharSelected(item.id);
                                focusOnItem(i);
                            }
                        }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
=======
    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit': 'unset'}
            }


            return (
                <li
                    className="char__item"
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                      if(e.key === ' ' || e.key === "Enter") {
                          props.onCharSelected(item.id);
                          focusOnItem(i);
                      }
                    }}>

                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
            )
        });

        return (
            <ul className="char__grid">
<<<<<<< HEAD
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
=======
                {items}
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
            </ul>
        )
    }

    const items = renderItems(charList);

<<<<<<< HEAD
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
=======
    const errorMessage = error? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading? <Spinner/> : null;
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
<<<<<<< HEAD
            <button
                disabled={newItemLoading}
                style={{'display' : charEnded ? 'none' : 'block'}}
                className="button button__main button__long"
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
=======
           <button
               className="button button__main button__long"
               disabled={newItemLoading}
               style={{'display' : charEnded? 'none' : 'block'}}
               onClick={() => onRequest(offset)} >
               <div className="inner">load more</div>
           </button>
       </div>
   )
}

CharList.propTypes = {
    onCharSelected:PropTypes.func.isRequired
>>>>>>> 381c1532b3d336f5f8a2d1bc3339270b98e8d3af
}

export default CharList;